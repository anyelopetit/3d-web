// imports
import * as THREE from 'three';

// character proxy
class BasicCharacterControllerProxy {
    constructor(animations) {
        this.animations = animations;
    }

    GetAnimation(name) {
        return this.animations[name];
    }
}

// character controller
class BasicCharacterController {
    constructor(params) {
        this.params = params;
        this._deceleration = new THREE.Vector3(-0.0005, -0.0001, -5.0);
        this._acceleration = new THREE.Vector3(1, 0.25, 50.0);
        this._velocity = new THREE.Vector3(0, 0, 0);
        this.animations = {}
        this._input = new BasicCharacterControllerInput();
        this._stateMachine = new CharacterFSM(new BasicCharacterControllerProxy(this.animations));
        // this.mixer = null;
        // this.pivot = new THREE.Object3D();
        // this.character = new THREE.Object3D();
        this.pivot.add(this.character);
        this.proxy = new BasicCharacterControllerProxy(this.animations);
    }

    _loadModels() {
      const loader = new GLTFLoader();
      loader.setPath('./assets/astronaut/');
      loader.load('scene.gltf', (gltf) => {
        gltf.scale.setScalar(0.1);
        gltf.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        this._target = gltf
        this._params.scene.add(this._target);
        this._mixer = new THREE.AnimationMixer(this._target);
        this._manager = new THREE.LoadingManager();
        this._manager.onLoad = () => {
          this._stateMachine.SetState('idle');
        }
        // this.character = gltf.scene;
        // this.animations = gltf.animations;
        // this._stateMachine.SetState('idle');

        const _OnLoad = (animName, anim) => {
          // this._stateMachine.SetState('idle');
          const clip = anim.animations[0];
          const action = this._mixer.clipAction(clip);
          this.animations[animName] = {
            clip: clip,
            action: action,
          }
        }

        const loader = new FBXLoader(this._manager);
        loader.setPath('./assets/warrior/');
        loader.load('sword-idle.fbx', (a) => { _OnLoad('idle', a); });
        loader.load('sword-walk.fbx', (a) => { _OnLoad('walk', a); });
        loader.load('sword-run.fbx', (a) => { _OnLoad('run', a); });
      });

    }

    Update(timeInSeconds) {
      if (!this._target) return;

      this._stateMachine.update(timeInSeconds, this._input);
      const velocity = this._velocity
      const frameDeceleration = new THREE.Vector3(
        velocity.x * this._deceleration.x,
        velocity.y * this._deceleration.y,
        velocity.z * this._deceleration.z
      )
      frameDeceleration.multiplyScalar(timeInSeconds);
      frameDeceleration.z = Math.sign(frameDeceleration.z) * Math.min(Math.abs(frameDeceleration.z), Math.abs(velocity.z));
      velocity.add(frameDeceleration);

      // acceleration in function if input
      // multiply by time in seconds
      const controlObject = this._target
      const _Q = new THREE.Quaternion()
      const _A = new THREE.Vector3()
      const _R = new controlObject.quaternion.clone()
      const acc = this._acceleration.clone()
      if (this._input.shift) {
        acc.multiplyScalar(2)
      }
      if (this._input._keys.shift) {
        acc.multiplyScalar(2)
      }
      if (this._input._keys.forward) {
        velocity.z += acc.z * timeInSeconds
      }
      if (this._input._keys.backward) {
        velocity.z -= acc.z * timeInSeconds
      }
      if (this._input._keys.left) {
        _A.set(0,1,0)
        _Q.setFromAxisAngle(_A, 4.0 * Math.PI * timeInSeconds * this._acceleration.y)
        _R.multiply(_Q)

      }
      if (this._input._keys.right) {
        _A.set(0,1,0)
        _Q.setFromAxisAngle(_A, 4.0 * -Math.PI * timeInSeconds * this._acceleration.y)
        _R.multiply(_Q)
      }
      controlObject.quaternion.copy(_R)

      const oldPosition = new THREE.Vector3()
      oldPosition.copy(controlObject.position)

      const forward = new THREE.Vector3(0,0,1)
      forward.applyQuaternion(controlObject.quaternion)
      forward.normalize()

      const sideways = new THREE.Vector3(1,0,0)
      sideways.applyQuaternion(controlObject.quaternion)
      sideways.normalize()

      forward.multiplyScalar(velocity.z)
      sideways.multiplyScalar(velocity.x)
      controlObject.position.add(forward)
      controlObject.position.add(sideways)
    }
}

// character controller input
class BasicCharacterControllerInput {
    constructor() {
        this._init();
    }

    _init() {
        this._keys = {
            forward: false,
            backward: false,
            left: false,
            right: false,
            shift: false,
        };
        document.addEventListener('keydown', (e) => this._onKeyDown(e));
        document.addEventListener('keyup', (e) => this._onKeyUp(e));
    }

    _onKeyDown(e) {
        switch (e.key) {
            case 'w': // 87
                this._keys.forward = true;
                break;
            case 's': // 83
                this._keys.backward = true;
                break;
            case 'a': // 65
                this._keys.left = true;
                break;
            case 'd': // 68
                this._keys.right = true;
                break;
            case 'shift': // 16
                this._keys.shift = true;
                break;
        }
    }

    _onKeyUp(e) {
        switch (e.key) {
            case 'w': // 87
                this._keys.forward = false;
                break;
            case 's': // 83
                this._keys.backward = false;
                break;
            case 'a': // 65
                this._keys.left = false;
                break;
            case 'd': // 68
                this._keys.right = false;
                break;
            case 'shift': // 16
                this._keys.shift = false;
                break;
        }
    }
}

// state machines
class FiniteStateMachine {
    constructor() {
        this._init();
    }

    _init() {
        this._states = {};
        this._currentState = null;
    }

    addState(name, type) {
        this._states[name] = new type();
    }

    setState(name) {
      const prevState = this._currentState;

      if (prevState) {
        if (prevState.Name == name) return;
        prevState.Exit();
      }

      if (this._states[name]) {
          this._currentState = this._states[name];
          state.Enter(prevState)
      }
    }

    update(timeElapsed, input) {
        if (this._currentState) {
            this._currentState.Update(timeElapsed, input);
        }
    }
}


// character state machines
class CharacterFSM  extends FiniteStateMachine {
  constructor(proxy) {
    super()
    this._init(proxy);
    this.addState('idle', IdleState)
    this.addState('walk', WalkState)
    this.addState('run', RunState)
    this.setState('idle')
  }

  _init(proxy) {
    this.proxy = proxy;
    this._stateMachine = new FiniteStateMachine();
  }
}

// character states
class State {
  constructor(parent) {
    this.parent = parent;
  }
  Enter() {}
  Exit() {}
  Update() {}
}

class IdleState extends State {
  constructor(parent) {
    super(parent);
  }
  get Name() { return 'idle'; }

  Enter(prevState) {
    console.log('IdleState Enter');
    const idleAction = this.parent.proxy.GetAnimation('idle');
    if (prevState) {
      const prevAction = this.parent.proxy.GetAnimation(prevState.Name);
      idleAction.time = 0.0;
      prevAction.enabled = true
      idleAction.setEffectiveTimeScale(1.0);
      idleAction.setEffectiveWeight(1.0);
      idleAction.crossFadeFrom(prevAction, 0.5, true);
    }
    idleAction.play();
  }
  Exit() {
    console.log('IdleState Exit');
  }
  Update(_timeElapsed, input) {
    console.log('IdleState Update');
    if (input._keys.forward) {
      this.parent.setState('walk');
    }
  }
}

class WalkState extends State {
  constructor(parent) {
    super(parent);
  }
  get Name() { return 'walk'; }

  Enter(prevState) {
    console.log('WalkState Enter');
    const walkAction = this.parent.proxy.GetAnimation('walk');
    if (prevState) {
      const prevAction = this.parent.proxy.GetAnimation(prevState.Name);
      walkAction.enabled = true

      if (prevState.Name == 'run') {
        const ratio = walkAction.getClip().duration / prevAction.getClip().duration;
        walkAction.time = prevAction.time * ratio;
      } else {
        walkAction.time = 0.0;
        prevAction.enabled = true
        walkAction.setEffectiveTimeScale(1.0);
        walkAction.setEffectiveWeight(1.0);
      }
    }
    walkAction.crossFadeFrom(prevAction, 0.5, true);
    walkAction.play();
  }
  Exit() {
    console.log('WalkState Exit');
  }
  Update(_timeElapsed, input) {
    console.log('WalkState Update');
    if (input._keys.forward) {
      this.parent.setState('run');
      return
    }

    this.parent.setState('idle');
  }
}

class RunState extends State {
  constructor(parent) {
    super(parent);
  }
  get Name() { return 'run'; }

  Enter(prevState) {
    console.log('RunState Enter');
    const runAction = this.parent.proxy.GetAnimation('run');
    if (prevState) {
      const prevAction = this.parent.proxy.GetAnimation(prevState.Name);
      runAction.enabled = true

      if (prevState.Name == 'walk') {
        const ratio = runAction.getClip().duration / prevAction.getClip().duration;
        runAction.time = prevAction.time * ratio;
      } else {
        runAction.time = 0.0;
        prevAction.enabled = true
        runAction.setEffectiveTimeScale(1.0);
        runAction.setEffectiveWeight(1.0);
      }
    }
    runAction.crossFadeFrom(prevAction, 0.5, true);
    runAction.play();
  }
  Exit() {
    console.log('RunState Exit');
  }
  Update(_timeElapsed, input) {
    console.log('RunState Update');
    if (input._keys.forward || input._keys.backward) {
      if (!input._keys.shift) {
        this.parent.setState('walk');
      }
      return
    }

    this.parent.setState('idle');
  }
}
