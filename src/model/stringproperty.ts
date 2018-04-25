import { AtomicProperty } from './atomicproperty';

export class StringProperty extends AtomicProperty {

  fallbackValue() {
    return '';
  }

  _hasValue() {
    return true;
  }

}
