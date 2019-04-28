'use strict';
var $linkingInfo = Object.freeze({
  "semantics": Object.freeze({
    "asInstanceOfs": 1,
    "arrayIndexOutOfBounds": 1,
    "moduleInit": 2,
    "strictFloats": false,
    "productionMode": false
  }),
  "assumingES6": false,
  "linkerVersion": "1.0.0-M7",
  "globalThis": this
});
var $imul = (Math.imul || (function(a, b) {
  var ah = (a >>> 16);
  var al = (a & 65535);
  var bh = (b >>> 16);
  var bl = (b & 65535);
  return (((al * bl) + ((((ah * bl) + (al * bh)) << 16) >>> 0)) | 0)
}));
var $fround = (Math.fround || (function(v) {
  return (+v)
}));
var $clz32 = (Math.clz32 || (function(i) {
  if ((i === 0)) {
    return 32
  };
  var r = 1;
  if (((i & (-65536)) === 0)) {
    i = (i << 16);
    r = (r + 16)
  };
  if (((i & (-16777216)) === 0)) {
    i = (i << 8);
    r = (r + 8)
  };
  if (((i & (-268435456)) === 0)) {
    i = (i << 4);
    r = (r + 4)
  };
  if (((i & (-1073741824)) === 0)) {
    i = (i << 2);
    r = (r + 2)
  };
  return (r + (i >> 31))
}));
var $L0;
function $propertyName(obj) {
  for (var prop in obj) {
    return prop
  }
}
function $Char(c) {
  this.c = c
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c)
});
function $throwClassCastException(instance, classFullName) {
  throw $ct_sjsr_UndefinedBehaviorError__init___jl_Throwable(new $c_sjsr_UndefinedBehaviorError(), $ct_jl_ClassCastException__init___T(new $c_jl_ClassCastException(), ((instance + " is not an instance of ") + classFullName)))
}
function $throwArrayCastException(instance, classArrayEncodedName, depth) {
  while ((--depth)) {
    classArrayEncodedName = ("[" + classArrayEncodedName)
  };
  $throwClassCastException(instance, classArrayEncodedName)
}
function $throwArrayIndexOutOfBoundsException(i) {
  throw $ct_sjsr_UndefinedBehaviorError__init___jl_Throwable(new $c_sjsr_UndefinedBehaviorError(), $ct_jl_ArrayIndexOutOfBoundsException__init___T(new $c_jl_ArrayIndexOutOfBoundsException(), ((i === null) ? null : ("" + i))))
}
function $noIsInstance(instance) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $makeNativeArrayWrapper(arrayClassData, nativeArray) {
  return new arrayClassData.constr(nativeArray)
}
function $newArrayObject(arrayClassData, lengths) {
  return $newArrayObjectInternal(arrayClassData, lengths, 0)
}
function $newArrayObjectInternal(arrayClassData, lengths, lengthIndex) {
  var result = new arrayClassData.constr(lengths[lengthIndex]);
  if ((lengthIndex < (lengths.length - 1))) {
    var subArrayClassData = arrayClassData.componentData;
    var subLengthIndex = (lengthIndex + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, lengths, subLengthIndex)
    }
  };
  return result
}
function $objectGetClass(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      var v = (instance | 0);
      if ((v === instance)) {
        if ($isByte(v)) {
          return $d_jl_Byte.getClassOf()
        } else if ($isShort(v)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else {
        return $d_jl_Float.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ($is_sjsr_RuntimeLong(instance)) {
        return $d_jl_Long.getClassOf()
      } else if ((instance instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $dp_getClass__jl_Class(instance) {
  return $objectGetClass(instance)
}
function $dp_clone__O(instance) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.clone__O()
  } else {
    throw $ct_jl_CloneNotSupportedException__init___(new $c_jl_CloneNotSupportedException())
  }
}
function $dp_notify__V(instance) {
  if ((instance === null)) {
    instance.notify__V()
  }
}
function $dp_notifyAll__V(instance) {
  if ((instance === null)) {
    instance.notifyAll__V()
  }
}
function $dp_finalize__V(instance) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    instance.finalize__V()
  }
}
function $dp_equals__O__Z(instance, rhs) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.equals__O__Z(rhs)
  } else if (((typeof instance) === "number")) {
    return $f_jl_Double__equals__O__Z(instance, rhs)
  } else if ((instance instanceof $Char)) {
    return $f_jl_Character__equals__O__Z(instance, rhs)
  } else {
    return (instance === rhs)
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance)
      } else {
        return $systemIdentityHashCode(instance)
      }
    }
  }
}
function $dp_compareTo__O__I(instance, rhs) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__compareTo__O__I(instance, rhs)
    }
    case "number": {
      return $f_jl_Double__compareTo__O__I(instance, rhs)
    }
    case "boolean": {
      return $f_jl_Boolean__compareTo__O__I(instance, rhs)
    }
    default: {
      if ((instance instanceof $Char)) {
        return $f_jl_Character__compareTo__O__I(instance, rhs)
      } else {
        return instance.compareTo__O__I(rhs)
      }
    }
  }
}
function $dp_length__I(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__length__I(instance)
  } else {
    return instance.length__I()
  }
}
function $dp_charAt__I__C(instance, index) {
  if (((typeof instance) === "string")) {
    return $f_T__charAt__I__C(instance, index)
  } else {
    return instance.charAt__I__C(index)
  }
}
function $dp_subSequence__I__I__jl_CharSequence(instance, start, end) {
  if (((typeof instance) === "string")) {
    return $f_T__subSequence__I__I__jl_CharSequence(instance, start, end)
  } else {
    return instance.subSequence__I__I__jl_CharSequence(start, end)
  }
}
function $dp_byteValue__B(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__byteValue__B(instance)
  } else {
    return instance.byteValue__B()
  }
}
function $dp_shortValue__S(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__shortValue__S(instance)
  } else {
    return instance.shortValue__S()
  }
}
function $dp_intValue__I(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__intValue__I(instance)
  } else {
    return instance.intValue__I()
  }
}
function $dp_longValue__J(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__longValue__J(instance)
  } else {
    return instance.longValue__J()
  }
}
function $dp_floatValue__F(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__floatValue__F(instance)
  } else {
    return instance.floatValue__F()
  }
}
function $dp_doubleValue__D(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__doubleValue__D(instance)
  } else {
    return instance.doubleValue__D()
  }
}
function $intDiv(x, y) {
  if ((y === 0)) {
    throw $ct_jl_ArithmeticException__init___T(new $c_jl_ArithmeticException(), "/ by zero")
  } else {
    return ((x / y) | 0)
  }
}
function $intMod(x, y) {
  if ((y === 0)) {
    throw $ct_jl_ArithmeticException__init___T(new $c_jl_ArithmeticException(), "/ by zero")
  } else {
    return ((x % y) | 0)
  }
}
function $doubleToInt(x) {
  return ((x > 2147483647) ? 2147483647 : ((x < (-2147483648)) ? (-2147483648) : (x | 0)))
}
function $newJSObjectWithVarargs(ctor, args) {
  var instance = Object.create(ctor.prototype);
  var result = ctor.apply(instance, args);
  switch ((typeof result)) {
    case "string":
    case "number":
    case "boolean":
    case "undefined":
    case "symbol": {
      return instance
    }
    default: {
      return ((result === null) ? instance : result)
    }
  }
}
function $resolveSuperRef(superClass, propName) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = superClass.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, propName);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(superClass, self, propName) {
  var desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(self) : getter.value)
  }
}
function $superSet(superClass, self, propName, value) {
  var desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(self, value);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + propName) + "'."))
}
function $systemArraycopy(src, srcPos, dest, destPos, length) {
  var srcu = src.u;
  var destu = dest.u;
  if ((((((srcPos < 0) || (destPos < 0)) || (length < 0)) || (srcPos > ((srcu.length - length) | 0))) || (destPos > ((destu.length - length) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  };
  if ((((srcu !== destu) || (destPos < srcPos)) || (((srcPos + length) | 0) < destPos))) {
    for (var i = 0; (i < length); i = ((i + 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  } else {
    for (var i = ((length - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = (((typeof WeakMap) !== "undefined") ? new WeakMap() : null);
var $systemIdentityHashCode = (($idHashCodeMap !== null) ? (function(obj) {
  switch ((typeof obj)) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "undefined": {
      return $dp_hashCode__I(obj)
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}) : (function(obj) {
  switch ((typeof obj)) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "undefined": {
      return $dp_hashCode__I(obj)
    }
    default: {
      if ((!(!(obj && obj.$classData)))) {
        var hash = obj.$idHashCode$0;
        if ((hash !== (void 0))) {
          return hash
        } else if ((!Object.isSealed(obj))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          obj.$idHashCode$0 = hash;
          return hash
        } else {
          return 42
        }
      } else if ((obj === null)) {
        0
      } else {
        42
      }
    }
  }
}));
function $isByte(v) {
  return ((((typeof v) === "number") && (((v << 24) >> 24) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isShort(v) {
  return ((((typeof v) === "number") && (((v << 16) >> 16) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isInt(v) {
  return ((((typeof v) === "number") && ((v | 0) === v)) && ((1 / v) !== (1 / (-0))))
}
function $asUnit(v) {
  if (((v === (void 0)) || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Void")
  }
}
function $asBoolean(v) {
  if ((((typeof v) === "boolean") || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Boolean")
  }
}
function $asChar(v) {
  if (((v instanceof $Char) || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Character")
  }
}
function $asByte(v) {
  if (($isByte(v) || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Byte")
  }
}
function $asShort(v) {
  if (($isShort(v) || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Short")
  }
}
function $asInt(v) {
  if (($isInt(v) || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Integer")
  }
}
function $asFloat(v) {
  if ((((typeof v) === "number") || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Float")
  }
}
function $asDouble(v) {
  if ((((typeof v) === "number") || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Double")
  }
}
function $bC(c) {
  return new $Char(c)
}
var $bC0 = $bC(0);
function $uZ(v) {
  return (!(!$asBoolean(v)))
}
function $uC(v) {
  return ((v === null) ? 0 : $asChar(v).c)
}
function $uB(v) {
  return ($asByte(v) | 0)
}
function $uS(v) {
  return ($asShort(v) | 0)
}
function $uI(v) {
  return ($asInt(v) | 0)
}
function $uJ(v) {
  return ((v === null) ? $L0 : $as_sjsr_RuntimeLong(v))
}
function $uF(v) {
  return (+$asFloat(v))
}
function $uD(v) {
  return (+$asDouble(v))
}
function $byteArray2TypedArray(value) {
  return new Int8Array(value.u)
}
function $typedArray2ByteArray(value) {
  return new ($d_B.getArrayOf().constr)(new Int8Array(value))
}
function $shortArray2TypedArray(value) {
  return new Int16Array(value.u)
}
function $typedArray2ShortArray(value) {
  return new ($d_S.getArrayOf().constr)(new Int16Array(value))
}
function $charArray2TypedArray(value) {
  return new Uint16Array(value.u)
}
function $typedArray2CharArray(value) {
  return new ($d_C.getArrayOf().constr)(new Uint16Array(value))
}
function $intArray2TypedArray(value) {
  return new Int32Array(value.u)
}
function $typedArray2IntArray(value) {
  return new ($d_I.getArrayOf().constr)(new Int32Array(value))
}
function $floatArray2TypedArray(value) {
  return new Float32Array(value.u)
}
function $typedArray2FloatArray(value) {
  return new ($d_F.getArrayOf().constr)(new Float32Array(value))
}
function $doubleArray2TypedArray(value) {
  return new Float64Array(value.u)
}
function $typedArray2DoubleArray(value) {
  return new ($d_D.getArrayOf().constr)(new Float64Array(value))
}
function $TypeData() {
  this.constr = (void 0);
  this.parentData = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isArrayOf = (void 0);
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isJSClass = false;
  this.isInstance = (void 0)
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, isArrayOf) {
  this.ancestors = {};
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  this.isArrayOf = isArrayOf;
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = (function(obj) {
    return false
  });
  return this
});
$TypeData.prototype.initClass = (function(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance, isArrayOf) {
  var internalName = $propertyName(internalNameObj);
  this.parentData = parentData;
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isArrayOf = (isArrayOf || (function(obj, depth) {
    return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors[internalName])))
  }));
  this.name = fullName;
  this.isInterface = isInterface;
  this.isJSType = (!(!isJSType));
  this.isInstance = (isInstance || (function(obj) {
    return (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))
  }));
  return this
});
$TypeData.prototype.initArray = (function(componentData) {
  var componentZero = ((componentData.zero === "longZero") ? $L0 : componentData.zero);
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = componentZero
      }
    } else {
      this.u = arg
    }
  }
  ArrayClass.prototype = new $h_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.get = (function(i) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOfBoundsException(i)
    };
    return this.u[i]
  });
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOfBoundsException(i)
    };
    this.u[i] = v
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(((this.u instanceof Array) ? this.u.slice(0) : new this.u.constructor(this.u)))
  });
  ArrayClass.prototype.$classData = this;
  var encodedName = ("[" + componentData.arrayEncodedName);
  var componentBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  this.constr = ArrayClass;
  this.parentData = $d_O;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = componentBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = encodedName;
  this.name = encodedName;
  this.isArrayClass = true;
  this.isInstance = (function(obj) {
    return componentBase.isArrayOf(obj, arrayDepth)
  });
  return this
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this)
  };
  return this._classOf
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this)
  };
  return this._arrayOf
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  if ((this.isPrimitive || that.isPrimitive)) {
    return (this === that)
  } else {
    var thatFakeInstance;
    if ((that === $d_T)) {
      thatFakeInstance = ""
    } else if ((that === $d_jl_Boolean)) {
      thatFakeInstance = false
    } else if ((((((that === $d_jl_Byte) || (that === $d_jl_Short)) || (that === $d_jl_Integer)) || (that === $d_jl_Float)) || (that === $d_jl_Double))) {
      thatFakeInstance = 0
    } else if ((that === $d_jl_Long.getClassOf())) {
      thatFakeInstance = $L0
    } else if ((that === $d_jl_Void.getClassOf())) {
      thatFakeInstance = (void 0)
    } else {
      thatFakeInstance = {
        $classData: that
      }
    };
    return this.isInstance(thatFakeInstance)
  }
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null)
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null)
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf()
  };
  return $newArrayObject(arrayClassData, lengths)
});
function $isArrayOf_V(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_V))))
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_V(obj, depth) {
  if (($isArrayOf_V(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "V", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
var $d_V = new $TypeData().initPrim((void 0), "V", "void", $isArrayOf_V);
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $isArrayOf_Z);
var $d_C = new $TypeData().initPrim(0, "C", "char", $isArrayOf_C);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $isArrayOf_B);
var $d_S = new $TypeData().initPrim(0, "S", "short", $isArrayOf_S);
var $d_I = new $TypeData().initPrim(0, "I", "int", $isArrayOf_I);
var $d_J = new $TypeData().initPrim("longZero", "J", "long", $isArrayOf_J);
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $isArrayOf_F);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $isArrayOf_D);
function $ct_O__init___($thiz) {
  return $thiz
}
/** @constructor */
function $c_O() {
  /*<skip>*/
}
/** @constructor */
function $h_O() {
  /*<skip>*/
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
$c_O.prototype.toString__T = (function() {
  var jsx$1 = $objectGetClass(this).getName__T();
  var i = this.hashCode__I();
  return ((jsx$1 + "@") + $as_T($uD((i >>> 0)).toString(16)))
});
$c_O.prototype.toString = (function() {
  return this.toString__T()
});
function $is_O(obj) {
  return (obj !== null)
}
function $as_O(obj) {
  return obj
}
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    var arrayDepth = (data.arrayDepth || 0);
    return ((!(arrayDepth < depth)) && ((arrayDepth > depth) || (!data.arrayBase.isPrimitive)))
  }
}
function $asArrayOf_O(obj, depth) {
  return (($isArrayOf_O(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Object;", depth))
}
var $d_O = new $TypeData().initClass({
  O: 0
}, false, "java.lang.Object", {
  O: 1
}, (void 0), (void 0), $is_O, $isArrayOf_O);
$c_O.prototype.$classData = $d_O;
/** @constructor */
function $c_Lclewin_scala_AppoloniusGenerator$() {
  /*<skip>*/
}
$c_Lclewin_scala_AppoloniusGenerator$.prototype = new $h_O();
$c_Lclewin_scala_AppoloniusGenerator$.prototype.constructor = $c_Lclewin_scala_AppoloniusGenerator$;
/** @constructor */
function $h_Lclewin_scala_AppoloniusGenerator$() {
  /*<skip>*/
}
$h_Lclewin_scala_AppoloniusGenerator$.prototype = $c_Lclewin_scala_AppoloniusGenerator$.prototype;
$c_Lclewin_scala_AppoloniusGenerator$.prototype.apply__Lclewin_scala_MobiusGenerator = (function() {
  var a = new $c_Lclewin_scala_Mobius(new $c_Lclewin_scala_Complex(1.0, 0.0), new $c_Lclewin_scala_Complex(0.0, 0.0), new $c_Lclewin_scala_Complex(0.0, (-2.0)), new $c_Lclewin_scala_Complex(1.0, 0.0));
  var b = new $c_Lclewin_scala_Mobius(new $c_Lclewin_scala_Complex(1.0, (-1.0)), new $c_Lclewin_scala_Complex(1.0, 0.0), new $c_Lclewin_scala_Complex(1.0, 0.0), new $c_Lclewin_scala_Complex(1.0, 1.0));
  return new $c_Lclewin_scala_MobiusGenerator(a, b)
});
$c_Lclewin_scala_AppoloniusGenerator$.prototype.$$js$exported$meth$apply__O = (function() {
  return this.apply__Lclewin_scala_MobiusGenerator()
});
$c_Lclewin_scala_AppoloniusGenerator$.prototype.apply = (function() {
  return this.$$js$exported$meth$apply__O()
});
var $d_Lclewin_scala_AppoloniusGenerator$ = new $TypeData().initClass({
  Lclewin_scala_AppoloniusGenerator$: 0
}, false, "clewin.scala.AppoloniusGenerator$", {
  Lclewin_scala_AppoloniusGenerator$: 1,
  O: 1
});
$c_Lclewin_scala_AppoloniusGenerator$.prototype.$classData = $d_Lclewin_scala_AppoloniusGenerator$;
var $n_Lclewin_scala_AppoloniusGenerator$ = (void 0);
function $m_Lclewin_scala_AppoloniusGenerator$() {
  if ((!$n_Lclewin_scala_AppoloniusGenerator$)) {
    $n_Lclewin_scala_AppoloniusGenerator$ = new $c_Lclewin_scala_AppoloniusGenerator$()
  };
  return $n_Lclewin_scala_AppoloniusGenerator$
}
/** @constructor */
function $c_Lclewin_scala_Complex(re, im) {
  this.re$1 = 0.0;
  this.im$1 = 0.0;
  this.re$1 = re;
  this.im$1 = im
}
$c_Lclewin_scala_Complex.prototype = new $h_O();
$c_Lclewin_scala_Complex.prototype.constructor = $c_Lclewin_scala_Complex;
/** @constructor */
function $h_Lclewin_scala_Complex() {
  /*<skip>*/
}
$h_Lclewin_scala_Complex.prototype = $c_Lclewin_scala_Complex.prototype;
$c_Lclewin_scala_Complex.prototype.hashCode__I = (function() {
  var this$1 = this.re$1;
  var jsx$1 = $m_jl_FloatingPointBits$().numberHashCode__D__I(this$1);
  var this$3 = this.im$1;
  return (($imul(31, $imul(31, jsx$1)) + $m_jl_FloatingPointBits$().numberHashCode__D__I(this$3)) | 0)
});
$c_Lclewin_scala_Complex.prototype.$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex = (function(other) {
  return new $c_Lclewin_scala_Complex((this.re$1 + other.re$1), (this.im$1 + other.im$1))
});
$c_Lclewin_scala_Complex.prototype.$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex = (function(other) {
  return new $c_Lclewin_scala_Complex((this.re$1 - other.re$1), (this.im$1 - other.im$1))
});
$c_Lclewin_scala_Complex.prototype.$$minus__D__Lclewin_scala_Complex = (function(other) {
  return new $c_Lclewin_scala_Complex((this.re$1 - other), this.im$1)
});
$c_Lclewin_scala_Complex.prototype.unary$und$minus__Lclewin_scala_Complex = (function() {
  return new $c_Lclewin_scala_Complex((-this.re$1), (-this.im$1))
});
$c_Lclewin_scala_Complex.prototype.$$times__D__Lclewin_scala_Complex = (function(other) {
  return this.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(new $c_Lclewin_scala_Complex(other, 0.0))
});
$c_Lclewin_scala_Complex.prototype.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex = (function(other) {
  return new $c_Lclewin_scala_Complex(((this.re$1 * other.re$1) - (this.im$1 * other.im$1)), ((this.re$1 * other.im$1) + (this.im$1 * other.re$1)))
});
$c_Lclewin_scala_Complex.prototype.$$div__Lclewin_scala_Complex__Lclewin_scala_Complex = (function(other) {
  var den = ((other.re$1 * other.re$1) + (other.im$1 * other.im$1));
  if ((den === 0.0)) {
    return new $c_Lclewin_scala_Complex(Infinity, Infinity)
  } else if ((((den === Infinity) || (den === (-Infinity))) || (den !== den))) {
    return new $c_Lclewin_scala_Complex(0.0, 0.0)
  } else {
    var r = (((this.re$1 * other.re$1) + (this.im$1 * other.im$1)) / den);
    var i = (((this.im$1 * other.re$1) - (this.re$1 * other.im$1)) / den);
    return new $c_Lclewin_scala_Complex(r, i)
  }
});
$c_Lclewin_scala_Complex.prototype.abs__D = (function() {
  var x = ((this.re$1 * this.re$1) + (this.im$1 * this.im$1));
  return $uD(Math.sqrt(x))
});
$c_Lclewin_scala_Complex.prototype.isInfinite__Z = (function() {
  var x = this.re$1;
  if (((x === Infinity) || (x === (-Infinity)))) {
    var jsx$2 = true
  } else {
    var x$1 = this.im$1;
    var jsx$2 = ((x$1 === Infinity) || (x$1 === (-Infinity)))
  };
  if (jsx$2) {
    var jsx$1 = true
  } else {
    var x$2 = this.re$1;
    var jsx$1 = (x$2 !== x$2)
  };
  if (jsx$1) {
    return true
  } else {
    var x$3 = this.im$1;
    return (x$3 !== x$3)
  }
});
$c_Lclewin_scala_Complex.prototype.sqrt__Lclewin_scala_Complex = (function() {
  if ((this.im$1 === 0.0)) {
    if ((this.re$1 < 0.0)) {
      var x = (-this.re$1);
      return new $c_Lclewin_scala_Complex(0.0, $uD(Math.sqrt(x)))
    } else {
      var x$1 = this.re$1;
      return new $c_Lclewin_scala_Complex($uD(Math.sqrt(x$1)), 0.0)
    }
  } else {
    var U2 = (0.5 * (this.re$1 + this.abs__D()));
    var u = $uD(Math.sqrt(U2));
    var v = (this.im$1 / (2.0 * u));
    return new $c_Lclewin_scala_Complex(u, v)
  }
});
$c_Lclewin_scala_Complex.prototype.toString__T = (function() {
  return (((("(" + this.re$1) + ",") + this.im$1) + ")")
});
function $is_Lclewin_scala_Complex(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lclewin_scala_Complex)))
}
function $as_Lclewin_scala_Complex(obj) {
  return (($is_Lclewin_scala_Complex(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "clewin.scala.Complex"))
}
function $isArrayOf_Lclewin_scala_Complex(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lclewin_scala_Complex)))
}
function $asArrayOf_Lclewin_scala_Complex(obj, depth) {
  return (($isArrayOf_Lclewin_scala_Complex(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lclewin.scala.Complex;", depth))
}
var $d_Lclewin_scala_Complex = new $TypeData().initClass({
  Lclewin_scala_Complex: 0
}, false, "clewin.scala.Complex", {
  Lclewin_scala_Complex: 1,
  O: 1
});
$c_Lclewin_scala_Complex.prototype.$classData = $d_Lclewin_scala_Complex;
/** @constructor */
function $c_Lclewin_scala_GrandmaGenerator$() {
  /*<skip>*/
}
$c_Lclewin_scala_GrandmaGenerator$.prototype = new $h_O();
$c_Lclewin_scala_GrandmaGenerator$.prototype.constructor = $c_Lclewin_scala_GrandmaGenerator$;
/** @constructor */
function $h_Lclewin_scala_GrandmaGenerator$() {
  /*<skip>*/
}
$h_Lclewin_scala_GrandmaGenerator$.prototype = $c_Lclewin_scala_GrandmaGenerator$.prototype;
$c_Lclewin_scala_GrandmaGenerator$.prototype.build__sjs_js_Array__sjs_js_Array__Lclewin_scala_MobiusGenerator = (function(ta, tb) {
  return this.apply__Lclewin_scala_Complex__Lclewin_scala_Complex__Lclewin_scala_MobiusGenerator(new $c_Lclewin_scala_Complex($uD(ta[0]), $uD(ta[1])), new $c_Lclewin_scala_Complex($uD(tb[0]), $uD(tb[1])))
});
$c_Lclewin_scala_GrandmaGenerator$.prototype.apply__Lclewin_scala_Complex__Lclewin_scala_Complex__Lclewin_scala_MobiusGenerator = (function(ta, tb) {
  var negqb = ta.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(tb);
  var qc = ta.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(ta).$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(tb.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(tb));
  var root = negqb.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(negqb).$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(qc.$$times__D__Lclewin_scala_Complex(4.0)).sqrt__Lclewin_scala_Complex();
  var x = new $c_Lclewin_scala_Complex(0.5, 0.0).$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(negqb.$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(root));
  var half = new $c_Lclewin_scala_Complex(0.5, 0.0);
  var two = new $c_Lclewin_scala_Complex(2.0, 0.0);
  var twoi = new $c_Lclewin_scala_Complex(0.0, 2.0);
  var z0_num = x.$$minus__D__Lclewin_scala_Complex(2.0).$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(tb);
  var z0_den = tb.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(x).$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(ta.$$times__D__Lclewin_scala_Complex(2.0)).$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(twoi.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(x));
  var z0 = z0_num.$$div__Lclewin_scala_Complex__Lclewin_scala_Complex(z0_den);
  var jsx$2 = half.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(ta);
  var jsx$1 = ta.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(x).$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(tb.$$times__D__Lclewin_scala_Complex(2.0)).$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(new $c_Lclewin_scala_Complex(0.0, 4.0)).$$div__Lclewin_scala_Complex__Lclewin_scala_Complex(x.$$times__D__Lclewin_scala_Complex(2.0).$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(new $c_Lclewin_scala_Complex(4.0, 0.0)).$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(z0));
  var this$4 = ta.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(x).$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(tb.$$times__D__Lclewin_scala_Complex(2.0)).$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(new $c_Lclewin_scala_Complex(0.0, 4.0));
  var this$6 = this$4.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(z0);
  var this$5 = two.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(x);
  var other = new $c_Lclewin_scala_Complex(4.0, 0.0);
  var other$1 = this$5.$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(other);
  var a = new $c_Lclewin_scala_Mobius(jsx$2, jsx$1, this$6.$$div__Lclewin_scala_Complex__Lclewin_scala_Complex(other$1), half.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(ta));
  var b = new $c_Lclewin_scala_Mobius(half.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(tb.$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(twoi)), half.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(tb), half.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(tb), half.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(tb.$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(twoi)));
  return new $c_Lclewin_scala_MobiusGenerator(a, b)
});
$c_Lclewin_scala_GrandmaGenerator$.prototype.$$js$exported$meth$build__sjs_js_Array__sjs_js_Array__O = (function(ta, tb) {
  return this.build__sjs_js_Array__sjs_js_Array__Lclewin_scala_MobiusGenerator(ta, tb)
});
$c_Lclewin_scala_GrandmaGenerator$.prototype.$$js$exported$meth$apply__Lclewin_scala_Complex__Lclewin_scala_Complex__O = (function(ta, tb) {
  return this.apply__Lclewin_scala_Complex__Lclewin_scala_Complex__Lclewin_scala_MobiusGenerator(ta, tb)
});
$c_Lclewin_scala_GrandmaGenerator$.prototype.apply = (function(arg$1, arg$2) {
  var prep0 = $as_Lclewin_scala_Complex(arg$1);
  var prep1 = $as_Lclewin_scala_Complex(arg$2);
  return this.$$js$exported$meth$apply__Lclewin_scala_Complex__Lclewin_scala_Complex__O(prep0, prep1)
});
$c_Lclewin_scala_GrandmaGenerator$.prototype.build = (function(arg$1, arg$2) {
  var prep0 = arg$1;
  var prep1 = arg$2;
  return this.$$js$exported$meth$build__sjs_js_Array__sjs_js_Array__O(prep0, prep1)
});
var $d_Lclewin_scala_GrandmaGenerator$ = new $TypeData().initClass({
  Lclewin_scala_GrandmaGenerator$: 0
}, false, "clewin.scala.GrandmaGenerator$", {
  Lclewin_scala_GrandmaGenerator$: 1,
  O: 1
});
$c_Lclewin_scala_GrandmaGenerator$.prototype.$classData = $d_Lclewin_scala_GrandmaGenerator$;
var $n_Lclewin_scala_GrandmaGenerator$ = (void 0);
function $m_Lclewin_scala_GrandmaGenerator$() {
  if ((!$n_Lclewin_scala_GrandmaGenerator$)) {
    $n_Lclewin_scala_GrandmaGenerator$ = new $c_Lclewin_scala_GrandmaGenerator$()
  };
  return $n_Lclewin_scala_GrandmaGenerator$
}
/** @constructor */
function $c_Lclewin_scala_Mobius(a, b, c, d) {
  this.a$1 = null;
  this.b$1 = null;
  this.c$1 = null;
  this.d$1 = null;
  this.a$1 = a;
  this.b$1 = b;
  this.c$1 = c;
  this.d$1 = d
}
$c_Lclewin_scala_Mobius.prototype = new $h_O();
$c_Lclewin_scala_Mobius.prototype.constructor = $c_Lclewin_scala_Mobius;
/** @constructor */
function $h_Lclewin_scala_Mobius() {
  /*<skip>*/
}
$h_Lclewin_scala_Mobius.prototype = $c_Lclewin_scala_Mobius.prototype;
$c_Lclewin_scala_Mobius.prototype.determinant__Lclewin_scala_Complex = (function() {
  return this.a$1.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(this.d$1).$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(this.b$1.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(this.c$1))
});
$c_Lclewin_scala_Mobius.prototype.$$times__Lclewin_scala_Mobius__Lclewin_scala_Mobius = (function(o) {
  return new $c_Lclewin_scala_Mobius(this.a$1.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(o.a$1).$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(this.b$1.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(o.c$1)), this.a$1.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(o.b$1).$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(this.b$1.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(o.d$1)), this.c$1.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(o.a$1).$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(this.d$1.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(o.c$1)), this.c$1.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(o.b$1).$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(this.d$1.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(o.d$1)))
});
$c_Lclewin_scala_Mobius.prototype.inverse__Lclewin_scala_Mobius = (function() {
  var D = this.determinant__Lclewin_scala_Complex();
  return new $c_Lclewin_scala_Mobius(this.d$1.$$div__Lclewin_scala_Complex__Lclewin_scala_Complex(D), this.b$1.unary$und$minus__Lclewin_scala_Complex().$$div__Lclewin_scala_Complex__Lclewin_scala_Complex(D), this.c$1.unary$und$minus__Lclewin_scala_Complex().$$div__Lclewin_scala_Complex__Lclewin_scala_Complex(D), this.a$1.$$div__Lclewin_scala_Complex__Lclewin_scala_Complex(D))
});
$c_Lclewin_scala_Mobius.prototype.transformPoint__Lclewin_scala_Complex__Lclewin_scala_Complex = (function(z) {
  if (z.isInfinite__Z()) {
    return ((this.c$1.abs__D() !== 0.0) ? this.a$1.$$div__Lclewin_scala_Complex__Lclewin_scala_Complex(this.c$1) : new $c_Lclewin_scala_Complex(Infinity, Infinity))
  } else {
    var numerator = this.a$1.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(z).$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(this.b$1);
    var denominator = this.c$1.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(z).$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(this.d$1);
    return ((denominator.abs__D() === 0.0) ? new $c_Lclewin_scala_Complex(Infinity, Infinity) : numerator.$$div__Lclewin_scala_Complex__Lclewin_scala_Complex(denominator))
  }
});
$c_Lclewin_scala_Mobius.prototype.fixedPoints__T2 = (function() {
  var Tr = this.a$1.$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(this.d$1);
  var root = Tr.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(Tr).$$minus__D__Lclewin_scala_Complex(4.0).sqrt__Lclewin_scala_Complex();
  this.a$1.$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(this.d$1);
  this.c$1.$$times__Lclewin_scala_Complex__Lclewin_scala_Complex(new $c_Lclewin_scala_Complex(2.0, 0.0));
  var k = Tr.$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(root).$$div__Lclewin_scala_Complex__Lclewin_scala_Complex(Tr.$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(root));
  return ((k.abs__D() > 1.0) ? new $c_T2(this.a$1.$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(this.d$1).$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(root).$$div__Lclewin_scala_Complex__Lclewin_scala_Complex(this.c$1.$$times__D__Lclewin_scala_Complex(2.0)), this.a$1.$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(this.d$1).$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(root).$$div__Lclewin_scala_Complex__Lclewin_scala_Complex(this.c$1.$$times__D__Lclewin_scala_Complex(2.0))) : new $c_T2(this.a$1.$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(this.d$1).$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(root).$$div__Lclewin_scala_Complex__Lclewin_scala_Complex(this.c$1.$$times__D__Lclewin_scala_Complex(2.0)), this.a$1.$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(this.d$1).$$plus__Lclewin_scala_Complex__Lclewin_scala_Complex(root).$$div__Lclewin_scala_Complex__Lclewin_scala_Complex(this.c$1.$$times__D__Lclewin_scala_Complex(2.0))))
});
$c_Lclewin_scala_Mobius.prototype.toString__T = (function() {
  return ((((((("a:" + this.a$1.toString__T()) + " b:") + this.b$1.toString__T()) + "\nc:") + this.c$1.toString__T()) + " d:") + this.d$1.toString__T())
});
function $is_Lclewin_scala_Mobius(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lclewin_scala_Mobius)))
}
function $as_Lclewin_scala_Mobius(obj) {
  return (($is_Lclewin_scala_Mobius(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "clewin.scala.Mobius"))
}
function $isArrayOf_Lclewin_scala_Mobius(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lclewin_scala_Mobius)))
}
function $asArrayOf_Lclewin_scala_Mobius(obj, depth) {
  return (($isArrayOf_Lclewin_scala_Mobius(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lclewin.scala.Mobius;", depth))
}
var $d_Lclewin_scala_Mobius = new $TypeData().initClass({
  Lclewin_scala_Mobius: 0
}, false, "clewin.scala.Mobius", {
  Lclewin_scala_Mobius: 1,
  O: 1
});
$c_Lclewin_scala_Mobius.prototype.$classData = $d_Lclewin_scala_Mobius;
/** @constructor */
function $c_Lclewin_scala_Point(x, y) {
  this.x$1 = 0.0;
  this.y$1 = 0.0;
  this.x$1 = x;
  this.y$1 = y
}
$c_Lclewin_scala_Point.prototype = new $h_O();
$c_Lclewin_scala_Point.prototype.constructor = $c_Lclewin_scala_Point;
/** @constructor */
function $h_Lclewin_scala_Point() {
  /*<skip>*/
}
$h_Lclewin_scala_Point.prototype = $c_Lclewin_scala_Point.prototype;
var $d_Lclewin_scala_Point = new $TypeData().initClass({
  Lclewin_scala_Point: 0
}, false, "clewin.scala.Point", {
  Lclewin_scala_Point: 1,
  O: 1
});
$c_Lclewin_scala_Point.prototype.$classData = $d_Lclewin_scala_Point;
/** @constructor */
function $c_Lclewin_scala_RecursiveLinePlot(generator, levmax, minLineLength) {
  this.levmax$1 = 0;
  this.minLineLength$1 = 0.0;
  this.gens$1 = null;
  this.fix$1 = null;
  this.a$1 = 0;
  this.b$1 = 0;
  this.A$1 = 0;
  this.B$1 = 0;
  this.begpt$1 = null;
  this.endpt$1 = null;
  this.repetFP$1 = null;
  this.levmax$1 = levmax;
  this.minLineLength$1 = minLineLength;
  var array = [generator.a$1, generator.b$1, generator.a$1.inverse__Lclewin_scala_Mobius(), generator.b$1.inverse__Lclewin_scala_Mobius()];
  var xs = $ct_sjs_js_WrappedArray__init___sjs_js_Array(new $c_sjs_js_WrappedArray(), array);
  var len = $uI(xs.array$6.length);
  var array$1 = $newArrayObject($d_Lclewin_scala_Mobius.getArrayOf(), [len]);
  var elem$1 = 0;
  elem$1 = 0;
  var this$6 = new $c_sc_IndexedSeqLike$Elements(xs, 0, $uI(xs.array$6.length));
  while (this$6.hasNext__Z()) {
    var arg1 = this$6.next__O();
    array$1.set(elem$1, arg1);
    elem$1 = ((1 + elem$1) | 0)
  };
  this.gens$1 = array$1;
  var xs$1 = this.gens$1;
  var elems$2 = null;
  elems$2 = [];
  var i = 0;
  var len$1 = xs$1.u.length;
  while ((i < len$1)) {
    var index = i;
    var arg1$1 = xs$1.get(index);
    var x = $as_Lclewin_scala_Mobius(arg1$1);
    var elem = $as_Lclewin_scala_Complex(x.fixedPoints__T2().$$und1$f);
    var unboxedElem = ((elem === null) ? null : elem);
    elems$2.push(unboxedElem);
    i = ((1 + i) | 0)
  };
  this.fix$1 = $makeNativeArrayWrapper($d_Lclewin_scala_Complex.getArrayOf(), elems$2);
  this.a$1 = 0;
  this.b$1 = 1;
  this.A$1 = 2;
  this.B$1 = 3;
  var elems$2$1 = null;
  elems$2$1 = [];
  var i$1 = 0;
  while ((i$1 < 4)) {
    var arg1$2 = i$1;
    var elem$2 = this.createBegPt__I__Lclewin_scala_Complex(arg1$2);
    var unboxedElem$1 = ((elem$2 === null) ? null : elem$2);
    elems$2$1.push(unboxedElem$1);
    i$1 = ((1 + i$1) | 0)
  };
  this.begpt$1 = $makeNativeArrayWrapper($d_Lclewin_scala_Complex.getArrayOf(), elems$2$1);
  var elems$2$2 = null;
  elems$2$2 = [];
  var i$2 = 0;
  while ((i$2 < 4)) {
    var arg1$3 = i$2;
    var elem$3 = this.createBegPt__I__Lclewin_scala_Complex(arg1$3);
    var unboxedElem$2 = ((elem$3 === null) ? null : elem$3);
    elems$2$2.push(unboxedElem$2);
    i$2 = ((1 + i$2) | 0)
  };
  this.endpt$1 = $makeNativeArrayWrapper($d_Lclewin_scala_Complex.getArrayOf(), elems$2$2);
  var elems$2$3 = null;
  elems$2$3 = [];
  var i$3 = 0;
  while ((i$3 < 4)) {
    var arg1$4 = i$3;
    var elems$2$4 = null;
    elems$2$4 = [];
    var i$4 = 0;
    while ((i$4 < 3)) {
      var arg1$5 = i$4;
      var elem$4 = $as_Lclewin_scala_Complex(this.genRepet__I__I__Lclewin_scala_Mobius(arg1$4, arg1$5).fixedPoints__T2().$$und1$f);
      var unboxedElem$3 = ((elem$4 === null) ? null : elem$4);
      elems$2$4.push(unboxedElem$3);
      i$4 = ((1 + i$4) | 0)
    };
    var elem$5 = $makeNativeArrayWrapper($d_Lclewin_scala_Complex.getArrayOf(), elems$2$4);
    elems$2$3.push(elem$5);
    i$3 = ((1 + i$3) | 0)
  };
  this.repetFP$1 = $makeNativeArrayWrapper($d_Lclewin_scala_Complex.getArrayOf().getArrayOf(), elems$2$3)
}
$c_Lclewin_scala_RecursiveLinePlot.prototype = new $h_O();
$c_Lclewin_scala_RecursiveLinePlot.prototype.constructor = $c_Lclewin_scala_RecursiveLinePlot;
/** @constructor */
function $h_Lclewin_scala_RecursiveLinePlot() {
  /*<skip>*/
}
$h_Lclewin_scala_RecursiveLinePlot.prototype = $c_Lclewin_scala_RecursiveLinePlot.prototype;
$c_Lclewin_scala_RecursiveLinePlot.prototype.rightHand__I__Lclewin_scala_Mobius = (function(i) {
  return this.gens$1.get(this.mod4__I__I(((1 + i) | 0))).$$times__Lclewin_scala_Mobius__Lclewin_scala_Mobius(this.gens$1.get(this.mod4__I__I(((2 + i) | 0)))).$$times__Lclewin_scala_Mobius__Lclewin_scala_Mobius(this.gens$1.get(this.mod4__I__I(((3 + i) | 0)))).$$times__Lclewin_scala_Mobius__Lclewin_scala_Mobius(this.gens$1.get(this.mod4__I__I(((4 + i) | 0))))
});
$c_Lclewin_scala_RecursiveLinePlot.prototype.leftHand__I__Lclewin_scala_Mobius = (function(i) {
  return this.gens$1.get(this.mod4__I__I((((-1) + i) | 0))).$$times__Lclewin_scala_Mobius__Lclewin_scala_Mobius(this.gens$1.get(this.mod4__I__I((((-2) + i) | 0)))).$$times__Lclewin_scala_Mobius__Lclewin_scala_Mobius(this.gens$1.get(this.mod4__I__I((((-3) + i) | 0)))).$$times__Lclewin_scala_Mobius__Lclewin_scala_Mobius(this.gens$1.get(this.mod4__I__I((((-4) + i) | 0))))
});
$c_Lclewin_scala_RecursiveLinePlot.prototype.createBegPt__I__Lclewin_scala_Complex = (function(i) {
  return $as_Lclewin_scala_Complex(this.rightHand__I__Lclewin_scala_Mobius(i).fixedPoints__T2().$$und1$f)
});
$c_Lclewin_scala_RecursiveLinePlot.prototype.genRepet__I__I__Lclewin_scala_Mobius = (function(i, j) {
  switch (j) {
    case 0: {
      return this.rightHand__I__Lclewin_scala_Mobius(i);
      break
    }
    case 1: {
      return this.gens$1.get(i);
      break
    }
    case 2: {
      return this.leftHand__I__Lclewin_scala_Mobius(i);
      break
    }
    default: {
      throw new $c_s_MatchError(j)
    }
  }
});
$c_Lclewin_scala_RecursiveLinePlot.prototype.build__sjs_js_Array = (function() {
  var segList = this.apply__sci_List();
  var f = (function($this) {
    return (function(segment$2) {
      var segment = $as_Lclewin_scala_Segment(segment$2);
      var jsx$1 = $m_sjs_js_JSConverters$JSRichGenTraversableOnce$();
      $m_sci_List$();
      var array = [segment.start$1.x$1, segment.start$1.y$1];
      var i = (((-1) + $uI(array.length)) | 0);
      var result = $m_sci_Nil$();
      while ((i >= 0)) {
        var this$4 = result;
        var index = i;
        var x = array[index];
        result = new $c_sci_$colon$colon(x, this$4);
        i = (((-1) + i) | 0)
      };
      var col = result;
      return jsx$1.toJSArray$extension__sc_GenTraversableOnce__sjs_js_Array(col)
    })
  })(this);
  var this$6 = $m_sci_List$();
  var bf = this$6.ReusableCBFInstance$2;
  if ((bf === $m_sci_List$().ReusableCBFInstance$2)) {
    if ((segList === $m_sci_Nil$())) {
      var jsx$2 = $m_sci_Nil$()
    } else {
      var arg1 = segList.head__O();
      var h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
      var t = h;
      var rest = segList.tail__sci_List();
      while ((rest !== $m_sci_Nil$())) {
        var arg1$1 = rest.head__O();
        var nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
        t.tl$5 = nx;
        t = nx;
        var this$7 = rest;
        rest = this$7.tail__sci_List()
      };
      var jsx$2 = h
    }
  } else {
    var b = $p_sc_TraversableLike__builder$1__scg_CanBuildFrom__scm_Builder(segList, bf);
    var these = segList;
    while ((!these.isEmpty__Z())) {
      var arg1$2 = these.head__O();
      b.$$plus$eq__O__scm_Builder(f(arg1$2));
      var this$8 = these;
      these = this$8.tail__sci_List()
    };
    var jsx$2 = b.result__O()
  };
  var arrList = $as_sci_List(jsx$2);
  return $m_sjs_js_JSConverters$JSRichGenTraversableOnce$().toJSArray$extension__sc_GenTraversableOnce__sjs_js_Array(arrList)
});
$c_Lclewin_scala_RecursiveLinePlot.prototype.apply__sci_List = (function() {
  var elem = $m_sci_Nil$();
  var elem$1 = null;
  elem$1 = elem;
  var i = 0;
  while (true) {
    var v1 = i;
    var this$5 = $m_s_Console$();
    $as_Ljava_io_PrintStream(this$5.outVar$2.v$1).println__T__V(("Root:" + v1));
    var outputPoints = $ct_scm_ArrayBuffer__init___(new $c_scm_ArrayBuffer());
    outputPoints.$$plus$eq__O__scm_ArrayBuffer(this.begpt$1.get(v1));
    var x$1 = this.explore$undtree__Lclewin_scala_Mobius__I__I__sci_List(this.gens$1.get(v1), v1, 0);
    elem$1 = $as_sci_List(elem$1).$$colon$colon$colon__sci_List__sci_List(x$1);
    var this$6 = $m_s_Console$();
    var jsx$1 = $as_Ljava_io_PrintStream(this$6.outVar$2.v$1);
    var this$7 = $as_sci_List(elem$1);
    jsx$1.println__T__V(("numLines:" + $f_sc_LinearSeqOptimized__length__I(this$7)));
    if ((i === 3)) {
      break
    };
    i = ((1 + i) | 0)
  };
  return $as_sci_List(elem$1)
});
$c_Lclewin_scala_RecursiveLinePlot.prototype.mod4__I__I = (function(x) {
  return ((((4 + ((x % 4) | 0)) | 0) % 4) | 0)
});
$c_Lclewin_scala_RecursiveLinePlot.prototype.explore$undtree__Lclewin_scala_Mobius__I__I__sci_List = (function(X, l, lev) {
  var elem = $m_sci_Nil$();
  var elem$1 = null;
  elem$1 = elem;
  var x = (((-1) + l) | 0);
  var end = ((1 + l) | 0);
  var isEmpty$4 = (x > end);
  if ((!isEmpty$4)) {
    var i = x;
    while (true) {
      var v1 = i;
      var Y = X.$$times__Lclewin_scala_Mobius__Lclewin_scala_Mobius(this.gens$1.get(this.mod4__I__I(v1)));
      var z0 = Y.transformPoint__Lclewin_scala_Complex__Lclewin_scala_Complex(this.repetFP$1.get(this.mod4__I__I(v1)).get(0));
      var z1 = Y.transformPoint__Lclewin_scala_Complex__Lclewin_scala_Complex(this.repetFP$1.get(this.mod4__I__I(v1)).get(1));
      var z2 = Y.transformPoint__Lclewin_scala_Complex__Lclewin_scala_Complex(this.repetFP$1.get(this.mod4__I__I(v1)).get(2));
      var dist1 = z1.$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(z0).abs__D();
      var dist2 = z2.$$minus__Lclewin_scala_Complex__Lclewin_scala_Complex(z1).abs__D();
      if (((((1 + lev) | 0) >= this.levmax$1) || ((dist1 < this.minLineLength$1) && (dist2 < this.minLineLength$1)))) {
        var x$2 = new $c_Lclewin_scala_Segment(new $c_Lclewin_scala_Point(z0.re$1, z0.im$1), new $c_Lclewin_scala_Point(z1.re$1, z1.im$1), lev);
        var this$11 = $as_sci_List(elem$1);
        elem$1 = new $c_sci_$colon$colon(x$2, this$11);
        var x$3 = new $c_Lclewin_scala_Segment(new $c_Lclewin_scala_Point(z1.re$1, z1.im$1), new $c_Lclewin_scala_Point(z2.re$1, z2.im$1), lev);
        var this$14 = $as_sci_List(elem$1);
        elem$1 = new $c_sci_$colon$colon(x$3, this$14)
      } else {
        var x$4 = this.explore$undtree__Lclewin_scala_Mobius__I__I__sci_List(Y, v1, ((1 + lev) | 0));
        elem$1 = $as_sci_List(elem$1).$$colon$colon$colon__sci_List__sci_List(x$4)
      };
      if ((i === end)) {
        break
      };
      i = ((1 + i) | 0)
    }
  };
  return $as_sci_List(elem$1)
});
$c_Lclewin_scala_RecursiveLinePlot.prototype.$$js$exported$meth$build__O = (function() {
  return this.build__sjs_js_Array()
});
$c_Lclewin_scala_RecursiveLinePlot.prototype.build = (function() {
  return this.$$js$exported$meth$build__O()
});
var $d_Lclewin_scala_RecursiveLinePlot = new $TypeData().initClass({
  Lclewin_scala_RecursiveLinePlot: 0
}, false, "clewin.scala.RecursiveLinePlot", {
  Lclewin_scala_RecursiveLinePlot: 1,
  O: 1
});
$c_Lclewin_scala_RecursiveLinePlot.prototype.$classData = $d_Lclewin_scala_RecursiveLinePlot;
/** @constructor */
function $c_Lclewin_scala_Segment(start, end, value) {
  this.start$1 = null;
  this.end$1 = null;
  this.value$1 = 0;
  this.start$1 = start;
  this.end$1 = end;
  this.value$1 = value
}
$c_Lclewin_scala_Segment.prototype = new $h_O();
$c_Lclewin_scala_Segment.prototype.constructor = $c_Lclewin_scala_Segment;
/** @constructor */
function $h_Lclewin_scala_Segment() {
  /*<skip>*/
}
$h_Lclewin_scala_Segment.prototype = $c_Lclewin_scala_Segment.prototype;
function $is_Lclewin_scala_Segment(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lclewin_scala_Segment)))
}
function $as_Lclewin_scala_Segment(obj) {
  return (($is_Lclewin_scala_Segment(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "clewin.scala.Segment"))
}
function $isArrayOf_Lclewin_scala_Segment(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lclewin_scala_Segment)))
}
function $asArrayOf_Lclewin_scala_Segment(obj, depth) {
  return (($isArrayOf_Lclewin_scala_Segment(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lclewin.scala.Segment;", depth))
}
var $d_Lclewin_scala_Segment = new $TypeData().initClass({
  Lclewin_scala_Segment: 0
}, false, "clewin.scala.Segment", {
  Lclewin_scala_Segment: 1,
  O: 1
});
$c_Lclewin_scala_Segment.prototype.$classData = $d_Lclewin_scala_Segment;
/** @constructor */
function $c_jl_Class(data0) {
  this.data$1 = null;
  this.data$1 = data0
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
  /*<skip>*/
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return $uZ(this.data$1.isInterface)
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return $uZ(this.data$1.isPrimitive)
});
$c_jl_Class.prototype.getName__T = (function() {
  return $as_T(this.data$1.name)
});
var $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
function $p_jl_FloatingPointBits$__doubleToLongBitsPolyfill__D__J($thiz, value) {
  if ((value !== value)) {
    var _3 = $uD(Math.pow(2.0, 51.0));
    var x1_$_$$und1$1 = false;
    var x1_$_$$und2$1 = 2047;
    var x1_$_$$und3$1 = _3
  } else if (((value === Infinity) || (value === (-Infinity)))) {
    var _1 = (value < 0.0);
    var x1_$_$$und1$1 = _1;
    var x1_$_$$und2$1 = 2047;
    var x1_$_$$und3$1 = 0.0
  } else if ((value === 0.0)) {
    var _1$1 = ((1.0 / value) === (-Infinity));
    var x1_$_$$und1$1 = _1$1;
    var x1_$_$$und2$1 = 0;
    var x1_$_$$und3$1 = 0.0
  } else {
    var s = (value < 0.0);
    var av = (s ? (-value) : value);
    if ((av >= $uD(Math.pow(2.0, (-1022.0))))) {
      var twoPowFbits = $uD(Math.pow(2.0, 52.0));
      var a = ($uD(Math.log(av)) / 0.6931471805599453);
      var x = $uD(Math.floor(a));
      var a$1 = $uI((x | 0));
      var e = ((a$1 < 1023) ? a$1 : 1023);
      var b = e;
      var twoPowE = $uD(Math.pow(2.0, b));
      if ((twoPowE > av)) {
        e = (((-1) + e) | 0);
        twoPowE = (twoPowE / 2.0)
      };
      var n = ((av / twoPowE) * twoPowFbits);
      var w = $uD(Math.floor(n));
      var f = (n - w);
      var f$1 = ((f < 0.5) ? w : ((f > 0.5) ? (1.0 + w) : (((w % 2.0) !== 0.0) ? (1.0 + w) : w)));
      if (((f$1 / twoPowFbits) >= 2.0)) {
        e = ((1 + e) | 0);
        f$1 = 1.0
      };
      if ((e > 1023)) {
        e = 2047;
        f$1 = 0.0
      } else {
        e = ((1023 + e) | 0);
        f$1 = (f$1 - twoPowFbits)
      };
      var _2 = e;
      var _3$1 = f$1;
      var x1_$_$$und1$1 = s;
      var x1_$_$$und2$1 = _2;
      var x1_$_$$und3$1 = _3$1
    } else {
      var n$1 = (av / $uD(Math.pow(2.0, (-1074.0))));
      var w$1 = $uD(Math.floor(n$1));
      var f$2 = (n$1 - w$1);
      var _3$2 = ((f$2 < 0.5) ? w$1 : ((f$2 > 0.5) ? (1.0 + w$1) : (((w$1 % 2.0) !== 0.0) ? (1.0 + w$1) : w$1)));
      var x1_$_$$und1$1 = s;
      var x1_$_$$und2$1 = 0;
      var x1_$_$$und3$1 = _3$2
    }
  };
  var s$1 = $uZ(x1_$_$$und1$1);
  var e$1 = $uI(x1_$_$$und2$1);
  var f$3 = $uD(x1_$_$$und3$1);
  var x$1 = (f$3 / 4.294967296E9);
  var hif = $uI((x$1 | 0));
  var hi = (((s$1 ? (-2147483648) : 0) | (e$1 << 20)) | hif);
  var lo = $uI((f$3 | 0));
  return new $c_sjsr_RuntimeLong(lo, hi)
}
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f = false;
  this.arrayBuffer$1 = null;
  this.int32Array$1 = null;
  this.float32Array$1 = null;
  this.float64Array$1 = null;
  this.areTypedArraysBigEndian$1 = false;
  this.highOffset$1 = 0;
  this.lowOffset$1 = 0;
  $n_jl_FloatingPointBits$ = this;
  this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f = (((($as_T((typeof ArrayBuffer)) !== "undefined") && ($as_T((typeof Int32Array)) !== "undefined")) && ($as_T((typeof Float32Array)) !== "undefined")) && ($as_T((typeof Float64Array)) !== "undefined"));
  this.arrayBuffer$1 = (this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f ? new ArrayBuffer(8) : null);
  this.int32Array$1 = (this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f ? new Int32Array(this.arrayBuffer$1, 0, 2) : null);
  this.float32Array$1 = (this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f ? new Float32Array(this.arrayBuffer$1, 0, 2) : null);
  this.float64Array$1 = (this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f ? new Float64Array(this.arrayBuffer$1, 0, 1) : null);
  if ((!this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f)) {
    var jsx$1 = true
  } else {
    this.int32Array$1[0] = 16909060;
    var jsx$1 = ($uB(new Int8Array(this.arrayBuffer$1, 0, 8)[0]) === 1)
  };
  this.areTypedArraysBigEndian$1 = jsx$1;
  this.highOffset$1 = (this.areTypedArraysBigEndian$1 ? 0 : 1);
  this.lowOffset$1 = (this.areTypedArraysBigEndian$1 ? 1 : 0)
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
  /*<skip>*/
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = $uI((value | 0));
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv
  } else {
    var t = this.doubleToLongBits__D__J(value);
    var lo = t.lo$2;
    var hi = t.hi$2;
    return (lo ^ hi)
  }
});
$c_jl_FloatingPointBits$.prototype.doubleToLongBits__D__J = (function(value) {
  if (this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f) {
    this.float64Array$1[0] = value;
    var value$1 = $uI(this.int32Array$1[this.highOffset$1]);
    var value$2 = $uI(this.int32Array$1[this.lowOffset$1]);
    return new $c_sjsr_RuntimeLong(value$2, value$1)
  } else {
    return $p_jl_FloatingPointBits$__doubleToLongBitsPolyfill__D__J(this, value)
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
var $n_jl_FloatingPointBits$ = (void 0);
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
/** @constructor */
function $c_jl_System$() {
  this.out$1 = null;
  this.err$1 = null;
  this.in$1 = null;
  this.getHighPrecisionTime$1 = null;
  $n_jl_System$ = this;
  this.out$1 = new $c_jl_JSConsoleBasedPrintStream(false);
  this.err$1 = new $c_jl_JSConsoleBasedPrintStream(true);
  this.in$1 = null;
  if (($as_T((typeof performance)) !== "undefined")) {
    var x = performance.now;
    if ($uZ((!(!x)))) {
      var jsx$1 = (function() {
        return $m_jl_System$().java$lang$System$$$anonfun$getHighPrecisionTime$1__D()
      })
    } else {
      var x$1 = performance.webkitNow;
      if ($uZ((!(!x$1)))) {
        var jsx$1 = (function() {
          return $m_jl_System$().java$lang$System$$$anonfun$getHighPrecisionTime$2__D()
        })
      } else {
        var jsx$1 = (function() {
          return $m_jl_System$().java$lang$System$$$anonfun$getHighPrecisionTime$3__D()
        })
      }
    }
  } else {
    var jsx$1 = (function() {
      return $m_jl_System$().java$lang$System$$$anonfun$getHighPrecisionTime$4__D()
    })
  };
  this.getHighPrecisionTime$1 = jsx$1
}
$c_jl_System$.prototype = new $h_O();
$c_jl_System$.prototype.constructor = $c_jl_System$;
/** @constructor */
function $h_jl_System$() {
  /*<skip>*/
}
$h_jl_System$.prototype = $c_jl_System$.prototype;
$c_jl_System$.prototype.java$lang$System$$$anonfun$getHighPrecisionTime$1__D = (function() {
  return $uD(performance.now())
});
$c_jl_System$.prototype.java$lang$System$$$anonfun$getHighPrecisionTime$2__D = (function() {
  return $uD(performance.webkitNow())
});
$c_jl_System$.prototype.java$lang$System$$$anonfun$getHighPrecisionTime$3__D = (function() {
  return $uD(new Date().getTime())
});
$c_jl_System$.prototype.java$lang$System$$$anonfun$getHighPrecisionTime$4__D = (function() {
  return $uD(new Date().getTime())
});
var $d_jl_System$ = new $TypeData().initClass({
  jl_System$: 0
}, false, "java.lang.System$", {
  jl_System$: 1,
  O: 1
});
$c_jl_System$.prototype.$classData = $d_jl_System$;
var $n_jl_System$ = (void 0);
function $m_jl_System$() {
  if ((!$n_jl_System$)) {
    $n_jl_System$ = new $c_jl_System$()
  };
  return $n_jl_System$
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined"
}
var $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), (function(x) {
  return (x === (void 0))
}));
/** @constructor */
function $c_s_DeprecatedConsole() {
  /*<skip>*/
}
$c_s_DeprecatedConsole.prototype = new $h_O();
$c_s_DeprecatedConsole.prototype.constructor = $c_s_DeprecatedConsole;
/** @constructor */
function $h_s_DeprecatedConsole() {
  /*<skip>*/
}
$h_s_DeprecatedConsole.prototype = $c_s_DeprecatedConsole.prototype;
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.v$1 = null;
  this.v$1 = init
}
$c_s_util_DynamicVariable.prototype = new $h_O();
$c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
  /*<skip>*/
}
$h_s_util_DynamicVariable.prototype = $c_s_util_DynamicVariable.prototype;
$c_s_util_DynamicVariable.prototype.toString__T = (function() {
  return (("DynamicVariable(" + this.v$1) + ")")
});
var $d_s_util_DynamicVariable = new $TypeData().initClass({
  s_util_DynamicVariable: 0
}, false, "scala.util.DynamicVariable", {
  s_util_DynamicVariable: 1,
  O: 1
});
$c_s_util_DynamicVariable.prototype.$classData = $d_s_util_DynamicVariable;
function $p_s_util_hashing_MurmurHash3__avalanche__I__I($thiz, hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = $imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = $imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + $imul(5, h)) | 0)
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = $imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = $imul(461845907, k);
  return (hash ^ k)
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, (hash ^ length))
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__I = (function(x, seed) {
  var arr = x.productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.productPrefix__T())
  } else {
    var h = seed;
    var i = 0;
    while ((i < arr)) {
      h = this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x.productElement__I__O(i)));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, arr)
  }
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_TraversableOnce__I__I = (function(xs, seed) {
  var n = new $c_sr_IntRef(0);
  var h = new $c_sr_IntRef(seed);
  xs.foreach__F1__V(new $c_sjsr_AnonFunction1((function($this, h$1, n$1) {
    return (function(x$2) {
      h$1.elem$1 = $this.mix__I__I__I(h$1.elem$1, $m_sr_Statics$().anyHash__O__I(x$2));
      n$1.elem$1 = ((1 + n$1.elem$1) | 0)
    })
  })(this, h, n)));
  return this.finalizeHash__I__I__I(h.elem$1, n.elem$1)
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var elems = xs;
  while ((!elems.isEmpty__Z())) {
    var head = elems.head__O();
    var this$1 = elems;
    var tail = this$1.tail__sci_List();
    h = this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(head));
    n = ((1 + n) | 0);
    elems = tail
  };
  return this.finalizeHash__I__I__I(h, n)
});
/** @constructor */
function $c_sc_Iterator$() {
  this.empty$1 = null;
  $n_sc_Iterator$ = this;
  this.empty$1 = new $c_sc_Iterator$$anon$2()
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
  /*<skip>*/
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
var $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
var $n_sc_Iterator$ = (void 0);
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
function $f_sc_TraversableOnce__mkString__T__T__T__T($thiz, start, sep, end) {
  var this$1 = $thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__init___(new $c_scm_StringBuilder()), start, sep, end);
  return this$1.underlying$5.java$lang$StringBuilder$$content$f
}
function $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var first = new $c_sr_BooleanRef(true);
  b.append__T__scm_StringBuilder(start);
  $thiz.foreach__F1__V(new $c_sjsr_AnonFunction1((function($this, first$1, b$1, sep$1) {
    return (function(x$2) {
      if (first$1.elem$1) {
        b$1.append__O__scm_StringBuilder(x$2);
        first$1.elem$1 = false;
        return (void 0)
      } else {
        b$1.append__T__scm_StringBuilder(sep$1);
        return b$1.append__O__scm_StringBuilder(x$2)
      }
    })
  })($thiz, first, b, sep)));
  b.append__T__scm_StringBuilder(end);
  return b
}
function $is_sc_TraversableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_TraversableOnce)))
}
function $as_sc_TraversableOnce(obj) {
  return (($is_sc_TraversableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.TraversableOnce"))
}
function $isArrayOf_sc_TraversableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_TraversableOnce)))
}
function $asArrayOf_sc_TraversableOnce(obj, depth) {
  return (($isArrayOf_sc_TraversableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.TraversableOnce;", depth))
}
/** @constructor */
function $c_scg_GenericCompanion() {
  /*<skip>*/
}
$c_scg_GenericCompanion.prototype = new $h_O();
$c_scg_GenericCompanion.prototype.constructor = $c_scg_GenericCompanion;
/** @constructor */
function $h_scg_GenericCompanion() {
  /*<skip>*/
}
$h_scg_GenericCompanion.prototype = $c_scg_GenericCompanion.prototype;
function $p_scg_Growable__loop$1__sc_LinearSeq__V($thiz, xs) {
  while (true) {
    var this$1 = xs;
    if ((!this$1.isEmpty__Z())) {
      $thiz.$$plus$eq__O__scg_Growable(xs.head__O());
      xs = $as_sc_LinearSeq(xs.tail__O());
      continue
    };
    break
  }
}
function $f_scg_Growable__$$plus$plus$eq__sc_TraversableOnce__scg_Growable($thiz, xs) {
  if ($is_sc_LinearSeq(xs)) {
    var x2 = $as_sc_LinearSeq(xs);
    $p_scg_Growable__loop$1__sc_LinearSeq__V($thiz, x2)
  } else {
    xs.foreach__F1__V(new $c_sjsr_AnonFunction1((function($this) {
      return (function(elem$2) {
        return $this.$$plus$eq__O__scg_Growable(elem$2)
      })
    })($thiz)))
  };
  return $thiz
}
/** @constructor */
function $c_sjs_js_JSConverters$JSRichGenTraversableOnce$() {
  /*<skip>*/
}
$c_sjs_js_JSConverters$JSRichGenTraversableOnce$.prototype = new $h_O();
$c_sjs_js_JSConverters$JSRichGenTraversableOnce$.prototype.constructor = $c_sjs_js_JSConverters$JSRichGenTraversableOnce$;
/** @constructor */
function $h_sjs_js_JSConverters$JSRichGenTraversableOnce$() {
  /*<skip>*/
}
$h_sjs_js_JSConverters$JSRichGenTraversableOnce$.prototype = $c_sjs_js_JSConverters$JSRichGenTraversableOnce$.prototype;
$c_sjs_js_JSConverters$JSRichGenTraversableOnce$.prototype.toJSArray$extension__sc_GenTraversableOnce__sjs_js_Array = (function($$this) {
  if ($is_sjs_js_ArrayOps($$this)) {
    var x2 = $as_sjs_js_ArrayOps($$this);
    return x2.repr__sjs_js_Array()
  } else if ($is_sjs_js_WrappedArray($$this)) {
    var x3 = $as_sjs_js_WrappedArray($$this);
    return x3.array$6
  } else {
    var result = [];
    $$this.foreach__F1__V(new $c_sjsr_AnonFunction1((function($this, result$1) {
      return (function(x$2) {
        return $uI(result$1.push(x$2))
      })
    })(this, result)));
    return result
  }
});
var $d_sjs_js_JSConverters$JSRichGenTraversableOnce$ = new $TypeData().initClass({
  sjs_js_JSConverters$JSRichGenTraversableOnce$: 0
}, false, "scala.scalajs.js.JSConverters$JSRichGenTraversableOnce$", {
  sjs_js_JSConverters$JSRichGenTraversableOnce$: 1,
  O: 1
});
$c_sjs_js_JSConverters$JSRichGenTraversableOnce$.prototype.$classData = $d_sjs_js_JSConverters$JSRichGenTraversableOnce$;
var $n_sjs_js_JSConverters$JSRichGenTraversableOnce$ = (void 0);
function $m_sjs_js_JSConverters$JSRichGenTraversableOnce$() {
  if ((!$n_sjs_js_JSConverters$JSRichGenTraversableOnce$)) {
    $n_sjs_js_JSConverters$JSRichGenTraversableOnce$ = new $c_sjs_js_JSConverters$JSRichGenTraversableOnce$()
  };
  return $n_sjs_js_JSConverters$JSRichGenTraversableOnce$
}
/** @constructor */
function $c_sjsr_package$() {
  /*<skip>*/
}
$c_sjsr_package$.prototype = new $h_O();
$c_sjsr_package$.prototype.constructor = $c_sjsr_package$;
/** @constructor */
function $h_sjsr_package$() {
  /*<skip>*/
}
$h_sjsr_package$.prototype = $c_sjsr_package$.prototype;
$c_sjsr_package$.prototype.wrapJavaScriptException__O__jl_Throwable = (function(e) {
  if ($is_jl_Throwable(e)) {
    var x2 = $as_jl_Throwable(e);
    return x2
  } else {
    return new $c_sjs_js_JavaScriptException(e)
  }
});
$c_sjsr_package$.prototype.unwrapJavaScriptException__jl_Throwable__O = (function(th) {
  if ($is_sjs_js_JavaScriptException(th)) {
    var x2 = $as_sjs_js_JavaScriptException(th);
    var e = x2.exception$4;
    return e
  } else {
    return th
  }
});
var $d_sjsr_package$ = new $TypeData().initClass({
  sjsr_package$: 0
}, false, "scala.scalajs.runtime.package$", {
  sjsr_package$: 1,
  O: 1
});
$c_sjsr_package$.prototype.$classData = $d_sjsr_package$;
var $n_sjsr_package$ = (void 0);
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$()
  };
  return $n_sjsr_package$
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
  /*<skip>*/
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.$$undtoString__s_Product__T = (function(x) {
  var this$1 = x.productIterator__sc_Iterator();
  var start = (x.productPrefix__T() + "(");
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this$1, start, ",", ")")
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
var $n_sr_ScalaRunTime$ = (void 0);
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
/** @constructor */
function $c_sr_Statics$() {
  /*<skip>*/
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
  /*<skip>*/
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.lo$2;
  var lo$1 = lv.hi$2;
  return ((lo$1 === (lo >> 31)) ? lo : (lo ^ lo$1))
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv
  } else {
    var this$1 = $m_sjsr_RuntimeLong$();
    var lo = this$1.scala$scalajs$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.scala$scalajs$runtime$RuntimeLong$$hiReturn$f;
    return (($m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3)
  } else if ($is_sjsr_RuntimeLong(x)) {
    var t = $uJ(x);
    var lo = t.lo$2;
    var hi = t.hi$2;
    return this.longHash__J__I(new $c_sjsr_RuntimeLong(lo, hi))
  } else {
    return $dp_hashCode__I(x)
  }
});
var $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
var $n_sr_Statics$ = (void 0);
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
/** @constructor */
function $c_jl_Number() {
  /*<skip>*/
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
  /*<skip>*/
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $ct_jl_Throwable__init___T__jl_Throwable__Z__Z($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.s$1 = s;
  $thiz.e$1 = e;
  $thiz.enableSuppression$1 = enableSuppression;
  $thiz.writableStackTrace$1 = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
}
/** @constructor */
function $c_jl_Throwable() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
/** @constructor */
function $hh_jl_Throwable() {
  /*<skip>*/
}
$hh_jl_Throwable.prototype = Error.prototype;
$c_jl_Throwable.prototype = new $hh_jl_Throwable();
$c_jl_Throwable.prototype.constructor = $c_jl_Throwable;
/** @constructor */
function $h_jl_Throwable() {
  /*<skip>*/
}
$h_jl_Throwable.prototype = $c_jl_Throwable.prototype;
$c_jl_Throwable.prototype.getMessage__T = (function() {
  return this.s$1
});
$c_jl_Throwable.prototype.fillInStackTrace__jl_Throwable = (function() {
  var identifyingString = Object.prototype.toString.call(this);
  if ((identifyingString === "[object Error]")) {
    this.stackTraceStateInternal$1 = this
  } else {
    var v = Error.captureStackTrace;
    if ((v === (void 0))) {
      try {
        var e$1 = {}.undef()
      } catch (e) {
        var e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
        if ((e$2 !== null)) {
          if ($is_sjs_js_JavaScriptException(e$2)) {
            var x5 = $as_sjs_js_JavaScriptException(e$2);
            var e$3 = x5.exception$4;
            var e$1 = e$3
          } else {
            var e$1;
            throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(e$2)
          }
        } else {
          var e$1;
          throw e
        }
      };
      this.stackTraceStateInternal$1 = e$1
    } else {
      Error.captureStackTrace(this);
      this.stackTraceStateInternal$1 = this
    }
  };
  return this
});
$c_jl_Throwable.prototype.toString__T = (function() {
  var className = $objectGetClass(this).getName__T();
  var message = this.getMessage__T();
  return ((message === null) ? className : ((className + ": ") + message))
});
$c_jl_Throwable.prototype.$$js$exported$meth$toString__O = (function() {
  return this.toString__T()
});
$c_jl_Throwable.prototype.$$js$exported$prop$name__O = (function() {
  return $objectGetClass(this).getName__T()
});
$c_jl_Throwable.prototype.$$js$exported$prop$message__O = (function() {
  var m = this.getMessage__T();
  return ((m === null) ? "" : m)
});
$c_jl_Throwable.prototype.hashCode__I = (function() {
  return $c_O.prototype.hashCode__I.call(this)
});
Object.defineProperty($c_jl_Throwable.prototype, "message", {
  "get": (function() {
    return this.$$js$exported$prop$message__O()
  }),
  "configurable": true
});
Object.defineProperty($c_jl_Throwable.prototype, "name", {
  "get": (function() {
    return this.$$js$exported$prop$name__O()
  }),
  "configurable": true
});
$c_jl_Throwable.prototype.toString = (function() {
  return this.$$js$exported$meth$toString__O()
});
function $is_jl_Throwable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.jl_Throwable)))
}
function $as_jl_Throwable(obj) {
  return (($is_jl_Throwable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.$$und1$f;
      break
    }
    case 1: {
      return $thiz.$$und2$f;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__init___T(new $c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.seqSeed$2 = 0;
  this.mapSeed$2 = 0;
  this.setSeed$2 = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.seqSeed$2 = $f_T__hashCode__I("Seq");
  this.mapSeed$2 = $f_T__hashCode__I("Map");
  this.setSeed$2 = $f_T__hashCode__I("Set")
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ($is_sci_List(xs)) {
    var x2 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x2, this.seqSeed$2)
  } else {
    return this.orderedHash__sc_TraversableOnce__I__I(xs, this.seqSeed$2)
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
var $n_s_util_hashing_MurmurHash3$ = (void 0);
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
function $f_sc_Iterator__foreach__F1__V($thiz, f) {
  while ($thiz.hasNext__Z()) {
    f.apply__O__O($thiz.next__O())
  }
}
function $ct_scg_GenTraversableFactory__init___($thiz) {
  $thiz.ReusableCBFInstance$2 = new $c_scg_GenTraversableFactory$$anon$1($thiz);
  return $thiz
}
/** @constructor */
function $c_scg_GenTraversableFactory() {
  this.ReusableCBFInstance$2 = null
}
$c_scg_GenTraversableFactory.prototype = new $h_scg_GenericCompanion();
$c_scg_GenTraversableFactory.prototype.constructor = $c_scg_GenTraversableFactory;
/** @constructor */
function $h_scg_GenTraversableFactory() {
  /*<skip>*/
}
$h_scg_GenTraversableFactory.prototype = $c_scg_GenTraversableFactory.prototype;
function $ct_scg_GenTraversableFactory$GenericCanBuildFrom__init___scg_GenTraversableFactory($thiz, $$outer) {
  if (($$outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.$$outer$1 = $$outer
  };
  return $thiz
}
/** @constructor */
function $c_scg_GenTraversableFactory$GenericCanBuildFrom() {
  this.$$outer$1 = null
}
$c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype = new $h_O();
$c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype.constructor = $c_scg_GenTraversableFactory$GenericCanBuildFrom;
/** @constructor */
function $h_scg_GenTraversableFactory$GenericCanBuildFrom() {
  /*<skip>*/
}
$h_scg_GenTraversableFactory$GenericCanBuildFrom.prototype = $c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype;
$c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype.apply__O__scm_Builder = (function(from) {
  var from$1 = $as_sc_GenTraversable(from);
  return from$1.companion__scg_GenericCompanion().newBuilder__scm_Builder()
});
/** @constructor */
function $c_sci_List$$anon$1() {
  /*<skip>*/
}
$c_sci_List$$anon$1.prototype = new $h_O();
$c_sci_List$$anon$1.prototype.constructor = $c_sci_List$$anon$1;
/** @constructor */
function $h_sci_List$$anon$1() {
  /*<skip>*/
}
$h_sci_List$$anon$1.prototype = $c_sci_List$$anon$1.prototype;
$c_sci_List$$anon$1.prototype.toString__T = (function() {
  return "<function1>"
});
$c_sci_List$$anon$1.prototype.apply__O__O = (function(x) {
  return this
});
var $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
function $f_scm_Builder__sizeHint__sc_TraversableLike__V($thiz, coll) {
  var x1 = coll.sizeHintIfCheap__I();
  if ((x1 !== (-1))) {
    $thiz.sizeHint__I__V(x1)
  }
}
function $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V($thiz, size, boundingColl) {
  var x1 = boundingColl.sizeHintIfCheap__I();
  if ((x1 !== (-1))) {
    $thiz.sizeHint__I__V(((size < x1) ? size : x1))
  }
}
/** @constructor */
function $c_sr_AbstractFunction1() {
  /*<skip>*/
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
  /*<skip>*/
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.elem$1 = false;
  this.elem$1 = elem
}
$c_sr_BooleanRef.prototype = new $h_O();
$c_sr_BooleanRef.prototype.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
  /*<skip>*/
}
$h_sr_BooleanRef.prototype = $c_sr_BooleanRef.prototype;
$c_sr_BooleanRef.prototype.toString__T = (function() {
  var b = this.elem$1;
  return ("" + b)
});
var $d_sr_BooleanRef = new $TypeData().initClass({
  sr_BooleanRef: 0
}, false, "scala.runtime.BooleanRef", {
  sr_BooleanRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_BooleanRef.prototype.$classData = $d_sr_BooleanRef;
/** @constructor */
function $c_sr_IntRef(elem) {
  this.elem$1 = 0;
  this.elem$1 = elem
}
$c_sr_IntRef.prototype = new $h_O();
$c_sr_IntRef.prototype.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
  /*<skip>*/
}
$h_sr_IntRef.prototype = $c_sr_IntRef.prototype;
$c_sr_IntRef.prototype.toString__T = (function() {
  var i = this.elem$1;
  return ("" + i)
});
var $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($uZ($thiz) ? 1231 : 1237)
}
function $f_jl_Boolean__toString__T($thiz) {
  var b = $uZ($thiz);
  return ("" + b)
}
var $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return ((typeof x) === "boolean")
}));
function $f_jl_Character__hashCode__I($thiz) {
  return $uC($thiz)
}
function $f_jl_Character__toString__T($thiz) {
  var c = $uC($thiz);
  return $as_T(String.fromCharCode(c))
}
var $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return (x instanceof $Char)
}));
/** @constructor */
function $c_jl_Error() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_Error.prototype = new $h_jl_Throwable();
$c_jl_Error.prototype.constructor = $c_jl_Error;
/** @constructor */
function $h_jl_Error() {
  /*<skip>*/
}
$h_jl_Error.prototype = $c_jl_Error.prototype;
/** @constructor */
function $c_jl_Exception() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_Exception.prototype = new $h_jl_Throwable();
$c_jl_Exception.prototype.constructor = $c_jl_Exception;
/** @constructor */
function $h_jl_Exception() {
  /*<skip>*/
}
$h_jl_Exception.prototype = $c_jl_Exception.prototype;
/** @constructor */
function $c_s_Console$() {
  this.outVar$2 = null;
  this.errVar$2 = null;
  this.inVar$2 = null;
  $n_s_Console$ = this;
  this.outVar$2 = new $c_s_util_DynamicVariable($m_jl_System$().out$1);
  this.errVar$2 = new $c_s_util_DynamicVariable($m_jl_System$().err$1);
  this.inVar$2 = new $c_s_util_DynamicVariable(null)
}
$c_s_Console$.prototype = new $h_s_DeprecatedConsole();
$c_s_Console$.prototype.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
  /*<skip>*/
}
$h_s_Console$.prototype = $c_s_Console$.prototype;
var $d_s_Console$ = new $TypeData().initClass({
  s_Console$: 0
}, false, "scala.Console$", {
  s_Console$: 1,
  s_DeprecatedConsole: 1,
  O: 1,
  s_io_AnsiColor: 1
});
$c_s_Console$.prototype.$classData = $d_s_Console$;
var $n_s_Console$ = (void 0);
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$()
  };
  return $n_s_Console$
}
/** @constructor */
function $c_scg_GenSeqFactory() {
  this.ReusableCBFInstance$2 = null
}
$c_scg_GenSeqFactory.prototype = new $h_scg_GenTraversableFactory();
$c_scg_GenSeqFactory.prototype.constructor = $c_scg_GenSeqFactory;
/** @constructor */
function $h_scg_GenSeqFactory() {
  /*<skip>*/
}
$h_scg_GenSeqFactory.prototype = $c_scg_GenSeqFactory.prototype;
/** @constructor */
function $c_scg_GenTraversableFactory$$anon$1($$outer) {
  this.$$outer$1 = null;
  this.$$outer$2 = null;
  if (($$outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.$$outer$2 = $$outer
  };
  $ct_scg_GenTraversableFactory$GenericCanBuildFrom__init___scg_GenTraversableFactory(this, $$outer)
}
$c_scg_GenTraversableFactory$$anon$1.prototype = new $h_scg_GenTraversableFactory$GenericCanBuildFrom();
$c_scg_GenTraversableFactory$$anon$1.prototype.constructor = $c_scg_GenTraversableFactory$$anon$1;
/** @constructor */
function $h_scg_GenTraversableFactory$$anon$1() {
  /*<skip>*/
}
$h_scg_GenTraversableFactory$$anon$1.prototype = $c_scg_GenTraversableFactory$$anon$1.prototype;
var $d_scg_GenTraversableFactory$$anon$1 = new $TypeData().initClass({
  scg_GenTraversableFactory$$anon$1: 0
}, false, "scala.collection.generic.GenTraversableFactory$$anon$1", {
  scg_GenTraversableFactory$$anon$1: 1,
  scg_GenTraversableFactory$GenericCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_scg_GenTraversableFactory$$anon$1.prototype.$classData = $d_scg_GenTraversableFactory$$anon$1;
/** @constructor */
function $c_sjsr_AnonFunction1(f) {
  this.f$2 = null;
  this.f$2 = f
}
$c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
  /*<skip>*/
}
$h_sjsr_AnonFunction1.prototype = $c_sjsr_AnonFunction1.prototype;
$c_sjsr_AnonFunction1.prototype.apply__O__O = (function(arg1) {
  return (0, this.f$2)(arg1)
});
var $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
function $p_sjsr_RuntimeLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$3 = ((4.294967296E9 * hi) + $uD((lo >>> 0)));
    return ("" + this$3)
  } else {
    return $as_T($p_sjsr_RuntimeLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
}
function $p_sjsr_RuntimeLong$__unsigned$und$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - $clz32(blo)) | 0);
    $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - $clz32(bhi)) | 0);
    $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_sjsr_RuntimeLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
}
function $p_sjsr_RuntimeLong$__unsigned$und$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_sjsr_RuntimeLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
}
function $p_sjsr_RuntimeLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? $clz32(bhi) : ((32 + $clz32(blo)) | 0)) - ((ahi !== 0) ? $clz32(ahi) : ((32 + $clz32(alo)) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0)));
    var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = $uI((x | 0));
      var x$1 = (x / 4.294967296E9);
      var hi$7 = $uI((x$1 | 0));
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0));
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0))
    }
  };
  if ((ask === 0)) {
    $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = remHi;
    return remLo
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0)));
    var this$13 = remLo;
    var remStr = ("" + this$13);
    var start = $uI(remStr.length);
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
}
/** @constructor */
function $c_sjsr_RuntimeLong$() {
  this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0
}
$c_sjsr_RuntimeLong$.prototype = new $h_O();
$c_sjsr_RuntimeLong$.prototype.constructor = $c_sjsr_RuntimeLong$;
/** @constructor */
function $h_sjsr_RuntimeLong$() {
  /*<skip>*/
}
$h_sjsr_RuntimeLong$.prototype = $c_sjsr_RuntimeLong$.prototype;
$c_sjsr_RuntimeLong$.prototype.scala$scalajs$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_sjsr_RuntimeLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_sjsr_RuntimeLong$__toUnsignedString__I__I__T(this, lo, hi)))
});
$c_sjsr_RuntimeLong$.prototype.scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var jsx$1 = $uD((x >>> 0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * jsx$1) + $uD((x$1 >>> 0))))
  } else {
    return ((4.294967296E9 * hi) + $uD((lo >>> 0)))
  }
});
$c_sjsr_RuntimeLong$.prototype.fromInt__I__sjsr_RuntimeLong = (function(value) {
  return new $c_sjsr_RuntimeLong(value, (value >> 31))
});
$c_sjsr_RuntimeLong$.prototype.fromDouble__D__sjsr_RuntimeLong = (function(value) {
  var lo = this.scala$scalajs$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_sjsr_RuntimeLong(lo, this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f)
});
$c_sjsr_RuntimeLong$.prototype.scala$scalajs$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (-2147483648);
    return 0
  } else if ((value >= 9.223372036854776E18)) {
    this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 2147483647;
    return (-1)
  } else {
    var rawLo = $uI((value | 0));
    var x = (value / 4.294967296E9);
    var rawHi = $uI((x | 0));
    this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo
  }
});
$c_sjsr_RuntimeLong$.prototype.scala$scalajs$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
});
$c_sjsr_RuntimeLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw $ct_jl_ArithmeticException__init___T(new $c_jl_ArithmeticException(), "/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
        return (-2147483648)
      } else {
        var lo = $intDiv(alo, blo);
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (lo >> 31);
        return lo
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (-1);
      return (-1)
    } else {
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
      return 0
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs_$_lo$2 = lo$1;
      var aAbs_$_hi$2 = hi
    } else {
      var aAbs_$_lo$2 = alo;
      var aAbs_$_hi$2 = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs_$_lo$2 = lo$2;
      var bAbs_$_hi$2 = hi$1
    } else {
      var bAbs_$_lo$2 = blo;
      var bAbs_$_hi$2 = bhi
    };
    var absRLo = $p_sjsr_RuntimeLong$__unsigned$und$div__I__I__I__I__I(this, aAbs_$_lo$2, aAbs_$_hi$2, bAbs_$_lo$2, bAbs_$_hi$2);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo
    } else {
      var hi$2 = this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f;
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    }
  }
});
$c_sjsr_RuntimeLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw $ct_jl_ArithmeticException__init___T(new $c_jl_ArithmeticException(), "/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (lo >> 31);
        return lo
      } else {
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
        return 0
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
      return 0
    } else {
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ahi;
      return alo
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs_$_lo$2 = lo$1;
      var aAbs_$_hi$2 = hi
    } else {
      var aAbs_$_lo$2 = alo;
      var aAbs_$_hi$2 = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs_$_lo$2 = lo$2;
      var bAbs_$_hi$2 = hi$1
    } else {
      var bAbs_$_lo$2 = blo;
      var bAbs_$_hi$2 = bhi
    };
    var absRLo = $p_sjsr_RuntimeLong$__unsigned$und$percent__I__I__I__I__I(this, aAbs_$_lo$2, aAbs_$_hi$2, bAbs_$_lo$2, bAbs_$_hi$2);
    if ((ahi < 0)) {
      var hi$2 = this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f;
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    } else {
      return absRLo
    }
  }
});
var $d_sjsr_RuntimeLong$ = new $TypeData().initClass({
  sjsr_RuntimeLong$: 0
}, false, "scala.scalajs.runtime.RuntimeLong$", {
  sjsr_RuntimeLong$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_RuntimeLong$.prototype.$classData = $d_sjsr_RuntimeLong$;
var $n_sjsr_RuntimeLong$ = (void 0);
function $m_sjsr_RuntimeLong$() {
  if ((!$n_sjsr_RuntimeLong$)) {
    $n_sjsr_RuntimeLong$ = new $c_sjsr_RuntimeLong$()
  };
  return $n_sjsr_RuntimeLong$
}
/** @constructor */
function $c_Ljava_io_OutputStream() {
  /*<skip>*/
}
$c_Ljava_io_OutputStream.prototype = new $h_O();
$c_Ljava_io_OutputStream.prototype.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
  /*<skip>*/
}
$h_Ljava_io_OutputStream.prototype = $c_Ljava_io_OutputStream.prototype;
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $uI($thiz.length)) | 0);
  while ((i >= 0)) {
    var jsx$1 = res;
    var index = i;
    res = ((jsx$1 + $imul((65535 & $uI($thiz.charCodeAt(index))), mul)) | 0);
    mul = $imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
}
function $f_T__toString__T($thiz) {
  return $thiz
}
function $is_T(obj) {
  return ((typeof obj) === "string")
}
function $as_T(obj) {
  return (($is_T(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
var $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1
}, (void 0), (void 0), $is_T);
function $f_jl_Byte__hashCode__I($thiz) {
  return $uB($thiz)
}
function $f_jl_Byte__toString__T($thiz) {
  var b = $uB($thiz);
  return ("" + b)
}
var $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $isByte(x)
}));
function $ct_jl_CloneNotSupportedException__init___($thiz) {
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z($thiz, null, null, true, true);
  return $thiz
}
/** @constructor */
function $c_jl_CloneNotSupportedException() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_CloneNotSupportedException.prototype = new $h_jl_Exception();
$c_jl_CloneNotSupportedException.prototype.constructor = $c_jl_CloneNotSupportedException;
/** @constructor */
function $h_jl_CloneNotSupportedException() {
  /*<skip>*/
}
$h_jl_CloneNotSupportedException.prototype = $c_jl_CloneNotSupportedException.prototype;
var $d_jl_CloneNotSupportedException = new $TypeData().initClass({
  jl_CloneNotSupportedException: 0
}, false, "java.lang.CloneNotSupportedException", {
  jl_CloneNotSupportedException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_CloneNotSupportedException.prototype.$classData = $d_jl_CloneNotSupportedException;
function $f_jl_Double__hashCode__I($thiz) {
  var value = $uD($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
}
function $f_jl_Double__toString__T($thiz) {
  var d = $uD($thiz);
  return ("" + d)
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
var $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return ((typeof x) === "number")
}));
function $f_jl_Float__hashCode__I($thiz) {
  var value = $uF($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
}
function $f_jl_Float__toString__T($thiz) {
  var f = $uF($thiz);
  return ("" + f)
}
var $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return ((typeof x) === "number")
}));
function $f_jl_Integer__hashCode__I($thiz) {
  return $uI($thiz)
}
function $f_jl_Integer__toString__T($thiz) {
  var i = $uI($thiz);
  return ("" + i)
}
var $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $isInt(x)
}));
function $f_jl_Long__hashCode__I($thiz) {
  var t = $uJ($thiz);
  var lo = t.lo$2;
  var hi = t.hi$2;
  return (lo ^ hi)
}
function $f_jl_Long__toString__T($thiz) {
  var t = $uJ($thiz);
  var lo = t.lo$2;
  var hi = t.hi$2;
  return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toString__I__I__T(lo, hi)
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
var $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $is_sjsr_RuntimeLong(x)
}));
/** @constructor */
function $c_jl_RuntimeException() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_RuntimeException.prototype = new $h_jl_Exception();
$c_jl_RuntimeException.prototype.constructor = $c_jl_RuntimeException;
/** @constructor */
function $h_jl_RuntimeException() {
  /*<skip>*/
}
$h_jl_RuntimeException.prototype = $c_jl_RuntimeException.prototype;
function $f_jl_Short__hashCode__I($thiz) {
  return $uS($thiz)
}
function $f_jl_Short__toString__T($thiz) {
  var s = $uS($thiz);
  return ("" + s)
}
var $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $isShort(x)
}));
function $ct_jl_StringBuilder__init___($thiz) {
  $thiz.java$lang$StringBuilder$$content$f = "";
  return $thiz
}
function $ct_jl_StringBuilder__init___I($thiz, initialCapacity) {
  $ct_jl_StringBuilder__init___($thiz);
  if ((initialCapacity < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  return $thiz
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.java$lang$StringBuilder$$content$f = null
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
  /*<skip>*/
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.java$lang$StringBuilder$$content$f
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = this.java$lang$StringBuilder$$content$f;
  return $uI(this$1.length)
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = this.java$lang$StringBuilder$$content$f;
  return (65535 & $uI(this$1.charCodeAt(index)))
});
var $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
/** @constructor */
function $c_jl_VirtualMachineError() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_VirtualMachineError.prototype = new $h_jl_Error();
$c_jl_VirtualMachineError.prototype.constructor = $c_jl_VirtualMachineError;
/** @constructor */
function $h_jl_VirtualMachineError() {
  /*<skip>*/
}
$h_jl_VirtualMachineError.prototype = $c_jl_VirtualMachineError.prototype;
/** @constructor */
function $c_sc_AbstractIterator() {
  /*<skip>*/
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
  /*<skip>*/
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.foreach__F1__V = (function(f) {
  $f_sc_Iterator__foreach__F1__V(this, f)
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
/** @constructor */
function $c_scm_GrowingBuilder(empty) {
  this.empty$1 = null;
  this.elems$1 = null;
  this.empty$1 = empty;
  this.elems$1 = empty
}
$c_scm_GrowingBuilder.prototype = new $h_O();
$c_scm_GrowingBuilder.prototype.constructor = $c_scm_GrowingBuilder;
/** @constructor */
function $h_scm_GrowingBuilder() {
  /*<skip>*/
}
$h_scm_GrowingBuilder.prototype = $c_scm_GrowingBuilder.prototype;
$c_scm_GrowingBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_GrowingBuilder.prototype.$$plus$eq__O__scm_GrowingBuilder = (function(x) {
  this.elems$1.$$plus$eq__O__scg_Growable(x);
  return this
});
$c_scm_GrowingBuilder.prototype.result__O = (function() {
  return this.elems$1
});
$c_scm_GrowingBuilder.prototype.$$plus$eq__O__scg_Growable = (function(elem) {
  return this.$$plus$eq__O__scm_GrowingBuilder(elem)
});
$c_scm_GrowingBuilder.prototype.$$plus$eq__O__scm_Builder = (function(elem) {
  return this.$$plus$eq__O__scm_GrowingBuilder(elem)
});
var $d_scm_GrowingBuilder = new $TypeData().initClass({
  scm_GrowingBuilder: 0
}, false, "scala.collection.mutable.GrowingBuilder", {
  scm_GrowingBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_scm_GrowingBuilder.prototype.$classData = $d_scm_GrowingBuilder;
/** @constructor */
function $c_sjsr_RuntimeLong(lo, hi) {
  this.lo$2 = 0;
  this.hi$2 = 0;
  this.lo$2 = lo;
  this.hi$2 = hi
}
$c_sjsr_RuntimeLong.prototype = new $h_jl_Number();
$c_sjsr_RuntimeLong.prototype.constructor = $c_sjsr_RuntimeLong;
/** @constructor */
function $h_sjsr_RuntimeLong() {
  /*<skip>*/
}
$h_sjsr_RuntimeLong.prototype = $c_sjsr_RuntimeLong.prototype;
$c_sjsr_RuntimeLong.prototype.equals__O__Z = (function(that) {
  if ($is_sjsr_RuntimeLong(that)) {
    var x2 = $as_sjsr_RuntimeLong(that);
    return ((this.lo$2 === x2.lo$2) && (this.hi$2 === x2.hi$2))
  } else {
    return false
  }
});
$c_sjsr_RuntimeLong.prototype.hashCode__I = (function() {
  return (this.lo$2 ^ this.hi$2)
});
$c_sjsr_RuntimeLong.prototype.toString__T = (function() {
  return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toString__I__I__T(this.lo$2, this.hi$2)
});
$c_sjsr_RuntimeLong.prototype.toInt__I = (function() {
  return this.lo$2
});
$c_sjsr_RuntimeLong.prototype.toDouble__D = (function() {
  return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D(this.lo$2, this.hi$2)
});
$c_sjsr_RuntimeLong.prototype.byteValue__B = (function() {
  return ((this.lo$2 << 24) >> 24)
});
$c_sjsr_RuntimeLong.prototype.shortValue__S = (function() {
  return ((this.lo$2 << 16) >> 16)
});
$c_sjsr_RuntimeLong.prototype.intValue__I = (function() {
  return this.lo$2
});
$c_sjsr_RuntimeLong.prototype.longValue__J = (function() {
  return $uJ(this)
});
$c_sjsr_RuntimeLong.prototype.floatValue__F = (function() {
  return $fround($m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D(this.lo$2, this.hi$2))
});
$c_sjsr_RuntimeLong.prototype.doubleValue__D = (function() {
  return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D(this.lo$2, this.hi$2)
});
$c_sjsr_RuntimeLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$compare__I__I__I__I__I(this.lo$2, this.hi$2, that.lo$2, that.hi$2)
});
$c_sjsr_RuntimeLong.prototype.equals__sjsr_RuntimeLong__Z = (function(b) {
  return ((this.lo$2 === b.lo$2) && (this.hi$2 === b.hi$2))
});
$c_sjsr_RuntimeLong.prototype.notEquals__sjsr_RuntimeLong__Z = (function(b) {
  return (!((this.lo$2 === b.lo$2) && (this.hi$2 === b.hi$2)))
});
$c_sjsr_RuntimeLong.prototype.$$less__sjsr_RuntimeLong__Z = (function(b) {
  var ahi = this.hi$2;
  var bhi = b.hi$2;
  return ((ahi === bhi) ? (((-2147483648) ^ this.lo$2) < ((-2147483648) ^ b.lo$2)) : (ahi < bhi))
});
$c_sjsr_RuntimeLong.prototype.$$less$eq__sjsr_RuntimeLong__Z = (function(b) {
  var ahi = this.hi$2;
  var bhi = b.hi$2;
  return ((ahi === bhi) ? (((-2147483648) ^ this.lo$2) <= ((-2147483648) ^ b.lo$2)) : (ahi < bhi))
});
$c_sjsr_RuntimeLong.prototype.$$greater__sjsr_RuntimeLong__Z = (function(b) {
  var ahi = this.hi$2;
  var bhi = b.hi$2;
  return ((ahi === bhi) ? (((-2147483648) ^ this.lo$2) > ((-2147483648) ^ b.lo$2)) : (ahi > bhi))
});
$c_sjsr_RuntimeLong.prototype.$$greater$eq__sjsr_RuntimeLong__Z = (function(b) {
  var ahi = this.hi$2;
  var bhi = b.hi$2;
  return ((ahi === bhi) ? (((-2147483648) ^ this.lo$2) >= ((-2147483648) ^ b.lo$2)) : (ahi > bhi))
});
$c_sjsr_RuntimeLong.prototype.unary$und$tilde__sjsr_RuntimeLong = (function() {
  return new $c_sjsr_RuntimeLong((~this.lo$2), (~this.hi$2))
});
$c_sjsr_RuntimeLong.prototype.$$bar__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  return new $c_sjsr_RuntimeLong((this.lo$2 | b.lo$2), (this.hi$2 | b.hi$2))
});
$c_sjsr_RuntimeLong.prototype.$$amp__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  return new $c_sjsr_RuntimeLong((this.lo$2 & b.lo$2), (this.hi$2 & b.hi$2))
});
$c_sjsr_RuntimeLong.prototype.$$up__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  return new $c_sjsr_RuntimeLong((this.lo$2 ^ b.lo$2), (this.hi$2 ^ b.hi$2))
});
$c_sjsr_RuntimeLong.prototype.$$less$less__I__sjsr_RuntimeLong = (function(n) {
  return new $c_sjsr_RuntimeLong((((32 & n) === 0) ? (this.lo$2 << n) : 0), (((32 & n) === 0) ? (((((this.lo$2 >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.hi$2 << n)) : (this.lo$2 << n)))
});
$c_sjsr_RuntimeLong.prototype.$$greater$greater$greater__I__sjsr_RuntimeLong = (function(n) {
  return new $c_sjsr_RuntimeLong((((32 & n) === 0) ? (((this.lo$2 >>> n) | 0) | ((this.hi$2 << 1) << ((31 - n) | 0))) : ((this.hi$2 >>> n) | 0)), (((32 & n) === 0) ? ((this.hi$2 >>> n) | 0) : 0))
});
$c_sjsr_RuntimeLong.prototype.$$greater$greater__I__sjsr_RuntimeLong = (function(n) {
  return new $c_sjsr_RuntimeLong((((32 & n) === 0) ? (((this.lo$2 >>> n) | 0) | ((this.hi$2 << 1) << ((31 - n) | 0))) : (this.hi$2 >> n)), (((32 & n) === 0) ? (this.hi$2 >> n) : (this.hi$2 >> 31)))
});
$c_sjsr_RuntimeLong.prototype.unary$und$minus__sjsr_RuntimeLong = (function() {
  var lo = this.lo$2;
  var hi = this.hi$2;
  return new $c_sjsr_RuntimeLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
});
$c_sjsr_RuntimeLong.prototype.$$plus__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  var alo = this.lo$2;
  var ahi = this.hi$2;
  var bhi = b.hi$2;
  var lo = ((alo + b.lo$2) | 0);
  return new $c_sjsr_RuntimeLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
});
$c_sjsr_RuntimeLong.prototype.$$minus__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  var alo = this.lo$2;
  var ahi = this.hi$2;
  var bhi = b.hi$2;
  var lo = ((alo - b.lo$2) | 0);
  return new $c_sjsr_RuntimeLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
});
$c_sjsr_RuntimeLong.prototype.$$times__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  var alo = this.lo$2;
  var blo = b.lo$2;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = $imul(a0, b0);
  var a1b0 = $imul(a1, b0);
  var a0b1 = $imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = (((((((($imul(alo, b.hi$2) + $imul(this.hi$2, blo)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_sjsr_RuntimeLong(lo, hi)
});
$c_sjsr_RuntimeLong.prototype.$$div__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  var this$1 = $m_sjsr_RuntimeLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.lo$2, this.hi$2, b.lo$2, b.hi$2);
  return new $c_sjsr_RuntimeLong(lo, this$1.scala$scalajs$runtime$RuntimeLong$$hiReturn$f)
});
$c_sjsr_RuntimeLong.prototype.$$percent__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  var this$1 = $m_sjsr_RuntimeLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.lo$2, this.hi$2, b.lo$2, b.hi$2);
  return new $c_sjsr_RuntimeLong(lo, this$1.scala$scalajs$runtime$RuntimeLong$$hiReturn$f)
});
$c_sjsr_RuntimeLong.prototype.compareTo__O__I = (function(x$1) {
  var that = $as_sjsr_RuntimeLong(x$1);
  return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$compare__I__I__I__I__I(this.lo$2, this.hi$2, that.lo$2, that.hi$2)
});
function $is_sjsr_RuntimeLong(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sjsr_RuntimeLong)))
}
function $as_sjsr_RuntimeLong(obj) {
  return (($is_sjsr_RuntimeLong(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.RuntimeLong"))
}
function $isArrayOf_sjsr_RuntimeLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_RuntimeLong)))
}
function $asArrayOf_sjsr_RuntimeLong(obj, depth) {
  return (($isArrayOf_sjsr_RuntimeLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.RuntimeLong;", depth))
}
var $d_sjsr_RuntimeLong = new $TypeData().initClass({
  sjsr_RuntimeLong: 0
}, false, "scala.scalajs.runtime.RuntimeLong", {
  sjsr_RuntimeLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_sjsr_RuntimeLong.prototype.$classData = $d_sjsr_RuntimeLong;
/** @constructor */
function $c_Lclewin_scala_MobiusGenerator(a, b) {
  this.a$1 = null;
  this.b$1 = null;
  this.a$1 = a;
  this.b$1 = b
}
$c_Lclewin_scala_MobiusGenerator.prototype = new $h_O();
$c_Lclewin_scala_MobiusGenerator.prototype.constructor = $c_Lclewin_scala_MobiusGenerator;
/** @constructor */
function $h_Lclewin_scala_MobiusGenerator() {
  /*<skip>*/
}
$h_Lclewin_scala_MobiusGenerator.prototype = $c_Lclewin_scala_MobiusGenerator.prototype;
$c_Lclewin_scala_MobiusGenerator.prototype.productPrefix__T = (function() {
  return "MobiusGenerator"
});
$c_Lclewin_scala_MobiusGenerator.prototype.productArity__I = (function() {
  return 2
});
$c_Lclewin_scala_MobiusGenerator.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.a$1;
      break
    }
    case 1: {
      return this.b$1;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__init___T(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_Lclewin_scala_MobiusGenerator.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lclewin_scala_MobiusGenerator.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_Lclewin_scala_MobiusGenerator.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$().$$undtoString__s_Product__T(this)
});
function $is_Lclewin_scala_MobiusGenerator(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lclewin_scala_MobiusGenerator)))
}
function $as_Lclewin_scala_MobiusGenerator(obj) {
  return (($is_Lclewin_scala_MobiusGenerator(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "clewin.scala.MobiusGenerator"))
}
function $isArrayOf_Lclewin_scala_MobiusGenerator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lclewin_scala_MobiusGenerator)))
}
function $asArrayOf_Lclewin_scala_MobiusGenerator(obj, depth) {
  return (($isArrayOf_Lclewin_scala_MobiusGenerator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lclewin.scala.MobiusGenerator;", depth))
}
var $d_Lclewin_scala_MobiusGenerator = new $TypeData().initClass({
  Lclewin_scala_MobiusGenerator: 0
}, false, "clewin.scala.MobiusGenerator", {
  Lclewin_scala_MobiusGenerator: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lclewin_scala_MobiusGenerator.prototype.$classData = $d_Lclewin_scala_MobiusGenerator;
function $ct_Ljava_io_FilterOutputStream__init___Ljava_io_OutputStream($thiz, out) {
  $thiz.out$2 = out;
  return $thiz
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
  this.out$2 = null
}
$c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_Ljava_io_FilterOutputStream.prototype.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
  /*<skip>*/
}
$h_Ljava_io_FilterOutputStream.prototype = $c_Ljava_io_FilterOutputStream.prototype;
function $ct_jl_ArithmeticException__init___T($thiz, s) {
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z($thiz, s, null, true, true);
  return $thiz
}
/** @constructor */
function $c_jl_ArithmeticException() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_ArithmeticException.prototype = new $h_jl_RuntimeException();
$c_jl_ArithmeticException.prototype.constructor = $c_jl_ArithmeticException;
/** @constructor */
function $h_jl_ArithmeticException() {
  /*<skip>*/
}
$h_jl_ArithmeticException.prototype = $c_jl_ArithmeticException.prototype;
var $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
function $ct_jl_ClassCastException__init___T($thiz, s) {
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z($thiz, s, null, true, true);
  return $thiz
}
/** @constructor */
function $c_jl_ClassCastException() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_ClassCastException.prototype = new $h_jl_RuntimeException();
$c_jl_ClassCastException.prototype.constructor = $c_jl_ClassCastException;
/** @constructor */
function $h_jl_ClassCastException() {
  /*<skip>*/
}
$h_jl_ClassCastException.prototype = $c_jl_ClassCastException.prototype;
var $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
function $ct_jl_IndexOutOfBoundsException__init___T($thiz, s) {
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z($thiz, s, null, true, true);
  return $thiz
}
/** @constructor */
function $c_jl_IndexOutOfBoundsException() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_IndexOutOfBoundsException.prototype = new $h_jl_RuntimeException();
$c_jl_IndexOutOfBoundsException.prototype.constructor = $c_jl_IndexOutOfBoundsException;
/** @constructor */
function $h_jl_IndexOutOfBoundsException() {
  /*<skip>*/
}
$h_jl_IndexOutOfBoundsException.prototype = $c_jl_IndexOutOfBoundsException.prototype;
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
  /*<skip>*/
}
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
  /*<skip>*/
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", {
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
});
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $c_jl_NegativeArraySizeException() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null;
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z(this, null, null, true, true)
}
$c_jl_NegativeArraySizeException.prototype = new $h_jl_RuntimeException();
$c_jl_NegativeArraySizeException.prototype.constructor = $c_jl_NegativeArraySizeException;
/** @constructor */
function $h_jl_NegativeArraySizeException() {
  /*<skip>*/
}
$h_jl_NegativeArraySizeException.prototype = $c_jl_NegativeArraySizeException.prototype;
var $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
/** @constructor */
function $c_jl_UnsupportedOperationException(s) {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null;
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z(this, s, null, true, true)
}
$c_jl_UnsupportedOperationException.prototype = new $h_jl_RuntimeException();
$c_jl_UnsupportedOperationException.prototype.constructor = $c_jl_UnsupportedOperationException;
/** @constructor */
function $h_jl_UnsupportedOperationException() {
  /*<skip>*/
}
$h_jl_UnsupportedOperationException.prototype = $c_jl_UnsupportedOperationException.prototype;
var $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
/** @constructor */
function $c_ju_NoSuchElementException(s) {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null;
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z(this, s, null, true, true)
}
$c_ju_NoSuchElementException.prototype = new $h_jl_RuntimeException();
$c_ju_NoSuchElementException.prototype.constructor = $c_ju_NoSuchElementException;
/** @constructor */
function $h_ju_NoSuchElementException() {
  /*<skip>*/
}
$h_ju_NoSuchElementException.prototype = $c_ju_NoSuchElementException.prototype;
var $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.bitmap$0$4)) {
    $thiz.objString$4 = (($thiz.obj$4 === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.bitmap$0$4 = true
  };
  return $thiz.objString$4
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.bitmap$0$4) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.objString$4)
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.obj$4;
  return ("of class " + $objectGetClass(this$1).getName__T())
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($dp_toString__T($thiz.obj$4) + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    var e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
    if ((e$2 !== null)) {
      return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_s_MatchError(obj) {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null;
  this.objString$4 = null;
  this.obj$4 = null;
  this.bitmap$0$4 = false;
  this.obj$4 = obj;
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z(this, null, null, true, true)
}
$c_s_MatchError.prototype = new $h_jl_RuntimeException();
$c_s_MatchError.prototype.constructor = $c_s_MatchError;
/** @constructor */
function $h_s_MatchError() {
  /*<skip>*/
}
$h_s_MatchError.prototype = $c_s_MatchError.prototype;
$c_s_MatchError.prototype.getMessage__T = (function() {
  return $p_s_MatchError__objString__T(this)
});
var $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
function $is_sc_GenTraversable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenTraversable)))
}
function $as_sc_GenTraversable(obj) {
  return (($is_sc_GenTraversable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenTraversable"))
}
function $isArrayOf_sc_GenTraversable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenTraversable)))
}
function $asArrayOf_sc_GenTraversable(obj, depth) {
  return (($isArrayOf_sc_GenTraversable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenTraversable;", depth))
}
/** @constructor */
function $c_sc_Iterator$$anon$2() {
  /*<skip>*/
}
$c_sc_Iterator$$anon$2.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$2.prototype.constructor = $c_sc_Iterator$$anon$2;
/** @constructor */
function $h_sc_Iterator$$anon$2() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$2.prototype = $c_sc_Iterator$$anon$2.prototype;
$c_sc_Iterator$$anon$2.prototype.hasNext__Z = (function() {
  return false
});
$c_sc_Iterator$$anon$2.prototype.next__E = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator")
});
$c_sc_Iterator$$anon$2.prototype.next__O = (function() {
  this.next__E()
});
var $d_sc_Iterator$$anon$2 = new $TypeData().initClass({
  sc_Iterator$$anon$2: 0
}, false, "scala.collection.Iterator$$anon$2", {
  sc_Iterator$$anon$2: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_Iterator$$anon$2.prototype.$classData = $d_sc_Iterator$$anon$2;
/** @constructor */
function $c_sc_LinearSeqLike$$anon$1($$outer) {
  this.these$2 = null;
  this.these$2 = $$outer
}
$c_sc_LinearSeqLike$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_LinearSeqLike$$anon$1.prototype.constructor = $c_sc_LinearSeqLike$$anon$1;
/** @constructor */
function $h_sc_LinearSeqLike$$anon$1() {
  /*<skip>*/
}
$h_sc_LinearSeqLike$$anon$1.prototype = $c_sc_LinearSeqLike$$anon$1.prototype;
$c_sc_LinearSeqLike$$anon$1.prototype.hasNext__Z = (function() {
  return (!this.these$2.isEmpty__Z())
});
$c_sc_LinearSeqLike$$anon$1.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var result = this.these$2.head__O();
    this.these$2 = $as_sc_LinearSeqLike(this.these$2.tail__O());
    return result
  } else {
    return $m_sc_Iterator$().empty$1.next__O()
  }
});
var $d_sc_LinearSeqLike$$anon$1 = new $TypeData().initClass({
  sc_LinearSeqLike$$anon$1: 0
}, false, "scala.collection.LinearSeqLike$$anon$1", {
  sc_LinearSeqLike$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_LinearSeqLike$$anon$1.prototype.$classData = $d_sc_LinearSeqLike$$anon$1;
/** @constructor */
function $c_scm_ListBuffer$$anon$1($$outer) {
  this.cursor$2 = null;
  this.cursor$2 = ($$outer.isEmpty__Z() ? $m_sci_Nil$() : $$outer.scala$collection$mutable$ListBuffer$$start$6)
}
$c_scm_ListBuffer$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_scm_ListBuffer$$anon$1.prototype.constructor = $c_scm_ListBuffer$$anon$1;
/** @constructor */
function $h_scm_ListBuffer$$anon$1() {
  /*<skip>*/
}
$h_scm_ListBuffer$$anon$1.prototype = $c_scm_ListBuffer$$anon$1.prototype;
$c_scm_ListBuffer$$anon$1.prototype.hasNext__Z = (function() {
  return (this.cursor$2 !== $m_sci_Nil$())
});
$c_scm_ListBuffer$$anon$1.prototype.next__O = (function() {
  if ((!this.hasNext__Z())) {
    throw new $c_ju_NoSuchElementException("next on empty Iterator")
  } else {
    var ans = this.cursor$2.head__O();
    var this$1 = this.cursor$2;
    this.cursor$2 = this$1.tail__sci_List();
    return ans
  }
});
var $d_scm_ListBuffer$$anon$1 = new $TypeData().initClass({
  scm_ListBuffer$$anon$1: 0
}, false, "scala.collection.mutable.ListBuffer$$anon$1", {
  scm_ListBuffer$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_scm_ListBuffer$$anon$1.prototype.$classData = $d_scm_ListBuffer$$anon$1;
function $ct_sjsr_UndefinedBehaviorError__init___jl_Throwable($thiz, cause) {
  var message = ((cause === null) ? null : cause.toString__T());
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z($thiz, message, cause, true, true);
  return $thiz
}
/** @constructor */
function $c_sjsr_UndefinedBehaviorError() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_sjsr_UndefinedBehaviorError.prototype = new $h_jl_VirtualMachineError();
$c_sjsr_UndefinedBehaviorError.prototype.constructor = $c_sjsr_UndefinedBehaviorError;
/** @constructor */
function $h_sjsr_UndefinedBehaviorError() {
  /*<skip>*/
}
$h_sjsr_UndefinedBehaviorError.prototype = $c_sjsr_UndefinedBehaviorError.prototype;
var $d_sjsr_UndefinedBehaviorError = new $TypeData().initClass({
  sjsr_UndefinedBehaviorError: 0
}, false, "scala.scalajs.runtime.UndefinedBehaviorError", {
  sjsr_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_UndefinedBehaviorError.prototype.$classData = $d_sjsr_UndefinedBehaviorError;
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.c$2 = 0;
  this.cmax$2 = 0;
  this.x$2$2 = null;
  this.x$2$2 = x$2;
  this.c$2 = 0;
  this.cmax$2 = x$2.productArity__I()
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.c$2 < this.cmax$2)
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = this.x$2$2.productElement__I__O(this.c$2);
  this.c$2 = ((1 + this.c$2) | 0);
  return result
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $c_T2(_1, _2) {
  this.$$und1$f = null;
  this.$$und2$f = null;
  this.$$und1$f = _1;
  this.$$und2$f = _2
}
$c_T2.prototype = new $h_O();
$c_T2.prototype.constructor = $c_T2;
/** @constructor */
function $h_T2() {
  /*<skip>*/
}
$h_T2.prototype = $c_T2.prototype;
$c_T2.prototype.productArity__I = (function() {
  return 2
});
$c_T2.prototype.productElement__I__O = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n)
});
$c_T2.prototype.toString__T = (function() {
  return (((("(" + this.$$und1$f) + ",") + this.$$und2$f) + ")")
});
$c_T2.prototype.productPrefix__T = (function() {
  return "Tuple2"
});
$c_T2.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_T2.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
var $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
function $ct_jl_ArrayIndexOutOfBoundsException__init___T($thiz, s) {
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z($thiz, s, null, true, true);
  return $thiz
}
/** @constructor */
function $c_jl_ArrayIndexOutOfBoundsException() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_ArrayIndexOutOfBoundsException.prototype = new $h_jl_IndexOutOfBoundsException();
$c_jl_ArrayIndexOutOfBoundsException.prototype.constructor = $c_jl_ArrayIndexOutOfBoundsException;
/** @constructor */
function $h_jl_ArrayIndexOutOfBoundsException() {
  /*<skip>*/
}
$h_jl_ArrayIndexOutOfBoundsException.prototype = $c_jl_ArrayIndexOutOfBoundsException.prototype;
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
function $p_sc_TraversableLike__builder$1__scg_CanBuildFrom__scm_Builder($thiz, bf$1) {
  var b = bf$1.apply__O__scm_Builder($thiz.repr__O());
  $f_scm_Builder__sizeHint__sc_TraversableLike__V(b, $thiz);
  return b
}
function $p_sc_TraversableLike__isPartLikelySynthetic$1__T__I__Z($thiz, fqn$1, partStart$1) {
  var firstChar = (65535 & $uI(fqn$1.charCodeAt(partStart$1)));
  return (((firstChar > 90) && (firstChar < 127)) || (firstChar < 65))
}
function $f_sc_TraversableLike__toString__T($thiz) {
  return $thiz.mkString__T__T__T__T(($thiz.stringPrefix__T() + "("), ", ", ")")
}
function $f_sc_TraversableLike__stringPrefix__T($thiz) {
  var this$1 = $thiz.repr__O();
  var fqn = $objectGetClass(this$1).getName__T();
  var pos = (((-1) + $uI(fqn.length)) | 0);
  while (true) {
    if ((pos !== (-1))) {
      var index = pos;
      var jsx$1 = ((65535 & $uI(fqn.charCodeAt(index))) === 36)
    } else {
      var jsx$1 = false
    };
    if (jsx$1) {
      pos = (((-1) + pos) | 0)
    } else {
      break
    }
  };
  if ((pos === (-1))) {
    var jsx$2 = true
  } else {
    var index$1 = pos;
    var jsx$2 = ((65535 & $uI(fqn.charCodeAt(index$1))) === 46)
  };
  if (jsx$2) {
    return ""
  };
  var result = "";
  while (true) {
    var partEnd = ((1 + pos) | 0);
    while (true) {
      if ((pos !== (-1))) {
        var index$2 = pos;
        var jsx$4 = ((65535 & $uI(fqn.charCodeAt(index$2))) <= 57)
      } else {
        var jsx$4 = false
      };
      if (jsx$4) {
        var index$3 = pos;
        var jsx$3 = ((65535 & $uI(fqn.charCodeAt(index$3))) >= 48)
      } else {
        var jsx$3 = false
      };
      if (jsx$3) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    var lastNonDigit = pos;
    while (true) {
      if ((pos !== (-1))) {
        var index$4 = pos;
        var jsx$6 = ((65535 & $uI(fqn.charCodeAt(index$4))) !== 36)
      } else {
        var jsx$6 = false
      };
      if (jsx$6) {
        var index$5 = pos;
        var jsx$5 = ((65535 & $uI(fqn.charCodeAt(index$5))) !== 46)
      } else {
        var jsx$5 = false
      };
      if (jsx$5) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    var partStart = ((1 + pos) | 0);
    if (((pos === lastNonDigit) && (partEnd !== $uI(fqn.length)))) {
      return result
    };
    while (true) {
      if ((pos !== (-1))) {
        var index$6 = pos;
        var jsx$7 = ((65535 & $uI(fqn.charCodeAt(index$6))) === 36)
      } else {
        var jsx$7 = false
      };
      if (jsx$7) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    if ((pos === (-1))) {
      var atEnd = true
    } else {
      var index$7 = pos;
      var atEnd = ((65535 & $uI(fqn.charCodeAt(index$7))) === 46)
    };
    if ((atEnd || (!$p_sc_TraversableLike__isPartLikelySynthetic$1__T__I__Z($thiz, fqn, partStart)))) {
      var part = $as_T(fqn.substring(partStart, partEnd));
      var this$2 = result;
      if ((this$2 === "")) {
        result = part
      } else {
        result = ((part + ".") + result)
      };
      if (atEnd) {
        return result
      }
    }
  }
}
/** @constructor */
function $c_scg_SeqFactory() {
  this.ReusableCBFInstance$2 = null
}
$c_scg_SeqFactory.prototype = new $h_scg_GenSeqFactory();
$c_scg_SeqFactory.prototype.constructor = $c_scg_SeqFactory;
/** @constructor */
function $h_scg_SeqFactory() {
  /*<skip>*/
}
$h_scg_SeqFactory.prototype = $c_scg_SeqFactory.prototype;
function $ct_Ljava_io_PrintStream__init___Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset($thiz, _out, autoFlush, charset) {
  $thiz.autoFlush$3 = autoFlush;
  $thiz.charset$3 = charset;
  $ct_Ljava_io_FilterOutputStream__init___Ljava_io_OutputStream($thiz, _out);
  $thiz.closing$3 = false;
  $thiz.java$io$PrintStream$$closed$3 = false;
  $thiz.errorFlag$3 = false;
  return $thiz
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
  this.out$2 = null;
  this.encoder$3 = null;
  this.autoFlush$3 = false;
  this.charset$3 = null;
  this.closing$3 = false;
  this.java$io$PrintStream$$closed$3 = false;
  this.errorFlag$3 = false;
  this.bitmap$0$3 = false
}
$c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$c_Ljava_io_PrintStream.prototype.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
  /*<skip>*/
}
$h_Ljava_io_PrintStream.prototype = $c_Ljava_io_PrintStream.prototype;
$c_Ljava_io_PrintStream.prototype.println__T__V = (function(s) {
  this.print__T__V(s);
  this.java$lang$JSConsoleBasedPrintStream$$printString__T__V("\n")
});
function $is_Ljava_io_PrintStream(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljava_io_PrintStream)))
}
function $as_Ljava_io_PrintStream(obj) {
  return (($is_Ljava_io_PrintStream(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.PrintStream"))
}
function $isArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_PrintStream)))
}
function $asArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (($isArrayOf_Ljava_io_PrintStream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.PrintStream;", depth))
}
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.ReusableCBFInstance$2 = null;
  $ct_scg_GenTraversableFactory__init___(this)
}
$c_scm_IndexedSeq$.prototype = new $h_scg_SeqFactory();
$c_scm_IndexedSeq$.prototype.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
  /*<skip>*/
}
$h_scm_IndexedSeq$.prototype = $c_scm_IndexedSeq$.prototype;
$c_scm_IndexedSeq$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_ArrayBuffer__init___(new $c_scm_ArrayBuffer())
});
var $d_scm_IndexedSeq$ = new $TypeData().initClass({
  scm_IndexedSeq$: 0
}, false, "scala.collection.mutable.IndexedSeq$", {
  scm_IndexedSeq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_scm_IndexedSeq$.prototype.$classData = $d_scm_IndexedSeq$;
var $n_scm_IndexedSeq$ = (void 0);
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$()
  };
  return $n_scm_IndexedSeq$
}
/** @constructor */
function $c_sjs_js_WrappedArray$() {
  this.ReusableCBFInstance$2 = null;
  $ct_scg_GenTraversableFactory__init___(this)
}
$c_sjs_js_WrappedArray$.prototype = new $h_scg_SeqFactory();
$c_sjs_js_WrappedArray$.prototype.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray$.prototype = $c_sjs_js_WrappedArray$.prototype;
$c_sjs_js_WrappedArray$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_sjs_js_WrappedArray__init___(new $c_sjs_js_WrappedArray())
});
var $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
var $n_sjs_js_WrappedArray$ = (void 0);
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (($as_T((typeof console)) !== "undefined")) {
    var x = $thiz.isErr$4;
    if ($uZ(x)) {
      var x$1 = console.error;
      var jsx$1 = $uZ((!(!x$1)))
    } else {
      var jsx$1 = false
    };
    if (jsx$1) {
      console.error(line)
    } else {
      console.log(line)
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.out$2 = null;
  this.encoder$3 = null;
  this.autoFlush$3 = false;
  this.charset$3 = null;
  this.closing$3 = false;
  this.java$io$PrintStream$$closed$3 = false;
  this.errorFlag$3 = false;
  this.bitmap$0$3 = false;
  this.isErr$4 = null;
  this.flushed$4 = false;
  this.buffer$4 = null;
  this.isErr$4 = isErr;
  var out = new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream();
  $ct_Ljava_io_PrintStream__init___Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset(this, out, false, null);
  this.flushed$4 = true;
  this.buffer$4 = ""
}
$c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$c_jl_JSConsoleBasedPrintStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
  /*<skip>*/
}
$h_jl_JSConsoleBasedPrintStream.prototype = $c_jl_JSConsoleBasedPrintStream.prototype;
$c_jl_JSConsoleBasedPrintStream.prototype.print__T__V = (function(s) {
  this.java$lang$JSConsoleBasedPrintStream$$printString__T__V(((s === null) ? "null" : s))
});
$c_jl_JSConsoleBasedPrintStream.prototype.java$lang$JSConsoleBasedPrintStream$$printString__T__V = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = $uI(this$1.indexOf("\n"));
    if ((nlPos < 0)) {
      this.buffer$4 = (("" + this.buffer$4) + rest);
      this.flushed$4 = false;
      rest = ""
    } else {
      var jsx$1 = this.buffer$4;
      var this$3 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + jsx$1) + $as_T(this$3.substring(0, nlPos))));
      this.buffer$4 = "";
      this.flushed$4 = true;
      var this$4 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = $as_T(this$4.substring(beginIndex))
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream", {
  jl_JSConsoleBasedPrintStream: 1,
  Ljava_io_PrintStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  jl_Appendable: 1
});
$c_jl_JSConsoleBasedPrintStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $c_sc_IndexedSeqLike$Elements($$outer, start, end) {
  this.end$2 = 0;
  this.index$2 = 0;
  this.$$outer$2 = null;
  this.end$2 = end;
  if (($$outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.$$outer$2 = $$outer
  };
  this.index$2 = start
}
$c_sc_IndexedSeqLike$Elements.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqLike$Elements.prototype.constructor = $c_sc_IndexedSeqLike$Elements;
/** @constructor */
function $h_sc_IndexedSeqLike$Elements() {
  /*<skip>*/
}
$h_sc_IndexedSeqLike$Elements.prototype = $c_sc_IndexedSeqLike$Elements.prototype;
$c_sc_IndexedSeqLike$Elements.prototype.hasNext__Z = (function() {
  return (this.index$2 < this.end$2)
});
$c_sc_IndexedSeqLike$Elements.prototype.next__O = (function() {
  if ((this.index$2 >= this.end$2)) {
    $m_sc_Iterator$().empty$1.next__O()
  };
  var x = this.$$outer$2.apply__I__O(this.index$2);
  this.index$2 = ((1 + this.index$2) | 0);
  return x
});
var $d_sc_IndexedSeqLike$Elements = new $TypeData().initClass({
  sc_IndexedSeqLike$Elements: 0
}, false, "scala.collection.IndexedSeqLike$Elements", {
  sc_IndexedSeqLike$Elements: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_BufferedIterator: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqLike$Elements.prototype.$classData = $d_sc_IndexedSeqLike$Elements;
/** @constructor */
function $c_sjs_js_JavaScriptException(exception) {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null;
  this.exception$4 = null;
  this.exception$4 = exception;
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z(this, null, null, true, true)
}
$c_sjs_js_JavaScriptException.prototype = new $h_jl_RuntimeException();
$c_sjs_js_JavaScriptException.prototype.constructor = $c_sjs_js_JavaScriptException;
/** @constructor */
function $h_sjs_js_JavaScriptException() {
  /*<skip>*/
}
$h_sjs_js_JavaScriptException.prototype = $c_sjs_js_JavaScriptException.prototype;
$c_sjs_js_JavaScriptException.prototype.getMessage__T = (function() {
  return $dp_toString__T(this.exception$4)
});
$c_sjs_js_JavaScriptException.prototype.fillInStackTrace__jl_Throwable = (function() {
  this.setStackTraceStateInternal__O__(this.exception$4);
  return this
});
$c_sjs_js_JavaScriptException.prototype.productPrefix__T = (function() {
  return "JavaScriptException"
});
$c_sjs_js_JavaScriptException.prototype.productArity__I = (function() {
  return 1
});
$c_sjs_js_JavaScriptException.prototype.productElement__I__O = (function(x$1) {
  if ((x$1 === 0)) {
    return this.exception$4
  } else {
    throw $ct_jl_IndexOutOfBoundsException__init___T(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
  }
});
$c_sjs_js_JavaScriptException.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sjs_js_JavaScriptException.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_sjs_js_JavaScriptException.prototype.setStackTraceStateInternal__O__ = (function(e) {
  this.stackTraceStateInternal$1 = e
});
function $is_sjs_js_JavaScriptException(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sjs_js_JavaScriptException)))
}
function $as_sjs_js_JavaScriptException(obj) {
  return (($is_sjs_js_JavaScriptException(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
var $d_sjs_js_JavaScriptException = new $TypeData().initClass({
  sjs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", {
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1
});
$c_sjs_js_JavaScriptException.prototype.$classData = $d_sjs_js_JavaScriptException;
function $f_sc_IterableLike__take__I__O($thiz, n) {
  var b = $thiz.newBuilder__scm_Builder();
  if ((n <= 0)) {
    return b.result__O()
  } else {
    $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(b, n, $thiz);
    var i = 0;
    var it = $thiz.iterator__sc_Iterator();
    while (((i < n) && it.hasNext__Z())) {
      b.$$plus$eq__O__scm_Builder(it.next__O());
      i = ((1 + i) | 0)
    };
    return b.result__O()
  }
}
/** @constructor */
function $c_sci_List$() {
  this.ReusableCBFInstance$2 = null;
  this.partialNotApplied$5 = null;
  $ct_scg_GenTraversableFactory__init___(this);
  $n_sci_List$ = this;
  this.partialNotApplied$5 = new $c_sci_List$$anon$1()
}
$c_sci_List$.prototype = new $h_scg_SeqFactory();
$c_sci_List$.prototype.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
  /*<skip>*/
}
$h_sci_List$.prototype = $c_sci_List$.prototype;
$c_sci_List$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
var $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
var $n_sci_List$ = (void 0);
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.ReusableCBFInstance$2 = null;
  $ct_scg_GenTraversableFactory__init___(this)
}
$c_scm_ArrayBuffer$.prototype = new $h_scg_SeqFactory();
$c_scm_ArrayBuffer$.prototype.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
  /*<skip>*/
}
$h_scm_ArrayBuffer$.prototype = $c_scm_ArrayBuffer$.prototype;
$c_scm_ArrayBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_ArrayBuffer__init___(new $c_scm_ArrayBuffer())
});
var $d_scm_ArrayBuffer$ = new $TypeData().initClass({
  scm_ArrayBuffer$: 0
}, false, "scala.collection.mutable.ArrayBuffer$", {
  scm_ArrayBuffer$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer$.prototype.$classData = $d_scm_ArrayBuffer$;
var $n_scm_ArrayBuffer$ = (void 0);
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$()
  };
  return $n_scm_ArrayBuffer$
}
/** @constructor */
function $c_scm_ListBuffer$() {
  this.ReusableCBFInstance$2 = null;
  $ct_scg_GenTraversableFactory__init___(this)
}
$c_scm_ListBuffer$.prototype = new $h_scg_SeqFactory();
$c_scm_ListBuffer$.prototype.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
  /*<skip>*/
}
$h_scm_ListBuffer$.prototype = $c_scm_ListBuffer$.prototype;
$c_scm_ListBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_GrowingBuilder(new $c_scm_ListBuffer())
});
var $d_scm_ListBuffer$ = new $TypeData().initClass({
  scm_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", {
  scm_ListBuffer$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer$.prototype.$classData = $d_scm_ListBuffer$;
var $n_scm_ListBuffer$ = (void 0);
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$()
  };
  return $n_scm_ListBuffer$
}
/** @constructor */
function $c_sc_AbstractTraversable() {
  /*<skip>*/
}
$c_sc_AbstractTraversable.prototype = new $h_O();
$c_sc_AbstractTraversable.prototype.constructor = $c_sc_AbstractTraversable;
/** @constructor */
function $h_sc_AbstractTraversable() {
  /*<skip>*/
}
$h_sc_AbstractTraversable.prototype = $c_sc_AbstractTraversable.prototype;
$c_sc_AbstractTraversable.prototype.newBuilder__scm_Builder = (function() {
  return this.companion__scg_GenericCompanion().newBuilder__scm_Builder()
});
$c_sc_AbstractTraversable.prototype.repr__O = (function() {
  return this
});
$c_sc_AbstractTraversable.prototype.stringPrefix__T = (function() {
  return $f_sc_TraversableLike__stringPrefix__T(this)
});
$c_sc_AbstractTraversable.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
});
$c_sc_AbstractTraversable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractTraversable.prototype.sizeHintIfCheap__I = (function() {
  return (-1)
});
function $is_sc_LinearSeqLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqLike)))
}
function $as_sc_LinearSeqLike(obj) {
  return (($is_sc_LinearSeqLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqLike"))
}
function $isArrayOf_sc_LinearSeqLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqLike)))
}
function $asArrayOf_sc_LinearSeqLike(obj, depth) {
  return (($isArrayOf_sc_LinearSeqLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqLike;", depth))
}
function $f_sc_IndexedSeqOptimized__foreach__F1__V($thiz, f) {
  var i = 0;
  var len = $thiz.length__I();
  while ((i < len)) {
    f.apply__O__O($thiz.apply__I__O(i));
    i = ((1 + i) | 0)
  }
}
function $f_sc_LinearSeqOptimized__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sc_LinearSeqOptimized(these.tail__O())
  };
  return len
}
function $f_sc_LinearSeqOptimized__apply__I__O($thiz, n) {
  var rest = $thiz.drop__I__sc_LinearSeqOptimized(n);
  if (((n < 0) || rest.isEmpty__Z())) {
    throw $ct_jl_IndexOutOfBoundsException__init___T(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return rest.head__O()
}
function $is_sc_LinearSeqOptimized(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqOptimized)))
}
function $as_sc_LinearSeqOptimized(obj) {
  return (($is_sc_LinearSeqOptimized(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqOptimized"))
}
function $isArrayOf_sc_LinearSeqOptimized(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqOptimized)))
}
function $asArrayOf_sc_LinearSeqOptimized(obj, depth) {
  return (($isArrayOf_sc_LinearSeqOptimized(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqOptimized;", depth))
}
/** @constructor */
function $c_sc_AbstractIterable() {
  /*<skip>*/
}
$c_sc_AbstractIterable.prototype = new $h_sc_AbstractTraversable();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
  /*<skip>*/
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
function $is_sjs_js_ArrayOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sjs_js_ArrayOps)))
}
function $as_sjs_js_ArrayOps(obj) {
  return (($is_sjs_js_ArrayOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.ArrayOps"))
}
function $isArrayOf_sjs_js_ArrayOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_ArrayOps)))
}
function $asArrayOf_sjs_js_ArrayOps(obj, depth) {
  return (($isArrayOf_sjs_js_ArrayOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.ArrayOps;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
/** @constructor */
function $c_sc_AbstractSeq() {
  /*<skip>*/
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
  /*<skip>*/
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_TraversableLike__toString__T(this)
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this.seq__sc_Seq())
});
/** @constructor */
function $c_scm_AbstractSeq() {
  /*<skip>*/
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
  /*<skip>*/
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
function $f_scm_ResizableArray__apply__I__O($thiz, idx) {
  if ((idx >= $thiz.size0$6)) {
    throw $ct_jl_IndexOutOfBoundsException__init___T(new $c_jl_IndexOutOfBoundsException(), ("" + idx))
  };
  return $thiz.array$6.get(idx)
}
function $f_scm_ResizableArray__foreach__F1__V($thiz, f) {
  var i = 0;
  var top = $thiz.size0$6;
  while ((i < top)) {
    f.apply__O__O($thiz.array$6.get(i));
    i = ((1 + i) | 0)
  }
}
function $f_scm_ResizableArray__ensureSize__I__V($thiz, n) {
  var value = $thiz.array$6.u.length;
  var hi = (value >> 31);
  var hi$1 = (n >> 31);
  if (((hi$1 === hi) ? (((-2147483648) ^ n) > ((-2147483648) ^ value)) : (hi$1 > hi))) {
    var lo = (value << 1);
    var hi$2 = (((value >>> 31) | 0) | (hi << 1));
    var newSize_$_lo$2 = lo;
    var newSize_$_hi$2 = hi$2;
    while (true) {
      var hi$3 = (n >> 31);
      var b_$_lo$2 = newSize_$_lo$2;
      var b_$_hi$2 = newSize_$_hi$2;
      var bhi = b_$_hi$2;
      if (((hi$3 === bhi) ? (((-2147483648) ^ n) > ((-2147483648) ^ b_$_lo$2)) : (hi$3 > bhi))) {
        var this$4_$_lo$2 = newSize_$_lo$2;
        var this$4_$_hi$2 = newSize_$_hi$2;
        var lo$1 = (this$4_$_lo$2 << 1);
        var hi$4 = (((this$4_$_lo$2 >>> 31) | 0) | (this$4_$_hi$2 << 1));
        var jsx$1_$_lo$2 = lo$1;
        var jsx$1_$_hi$2 = hi$4;
        newSize_$_lo$2 = jsx$1_$_lo$2;
        newSize_$_hi$2 = jsx$1_$_hi$2
      } else {
        break
      }
    };
    var this$5_$_lo$2 = newSize_$_lo$2;
    var this$5_$_hi$2 = newSize_$_hi$2;
    var ahi = this$5_$_hi$2;
    if (((ahi === 0) ? (((-2147483648) ^ this$5_$_lo$2) > (-1)) : (ahi > 0))) {
      var jsx$2_$_lo$2 = 2147483647;
      var jsx$2_$_hi$2 = 0;
      newSize_$_lo$2 = jsx$2_$_lo$2;
      newSize_$_hi$2 = jsx$2_$_hi$2
    };
    var this$6_$_lo$2 = newSize_$_lo$2;
    var this$6_$_hi$2 = newSize_$_hi$2;
    var newArray = $newArrayObject($d_O.getArrayOf(), [this$6_$_lo$2]);
    $systemArraycopy($thiz.array$6, 0, newArray, 0, $thiz.size0$6);
    $thiz.array$6 = newArray
  }
}
function $f_scm_ResizableArray__$$init$__V($thiz) {
  var x = $thiz.initialSize$6;
  $thiz.array$6 = $newArrayObject($d_O.getArrayOf(), [((x > 1) ? x : 1)]);
  $thiz.size0$6 = 0
}
/** @constructor */
function $c_sci_List() {
  /*<skip>*/
}
$c_sci_List.prototype = new $h_sc_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
  /*<skip>*/
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_List.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_LinearSeqLike$$anon$1(this)
});
$c_sci_List.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_List$()
});
$c_sci_List.prototype.$$colon$colon$colon__sci_List__sci_List = (function(prefix) {
  return (this.isEmpty__Z() ? prefix : (prefix.isEmpty__Z() ? this : new $c_scm_ListBuffer().$$plus$plus$eq__sc_TraversableOnce__scm_ListBuffer(prefix).prependToList__sci_List__sci_List(this)))
});
$c_sci_List.prototype.drop__I__sci_List = (function(n) {
  var these = this;
  var count = n;
  while (((!these.isEmpty__Z()) && (count > 0))) {
    var this$1 = these;
    these = this$1.tail__sci_List();
    count = (((-1) + count) | 0)
  };
  return these
});
$c_sci_List.prototype.foreach__F1__V = (function(f) {
  var these = this;
  while ((!these.isEmpty__Z())) {
    f.apply__O__O(these.head__O());
    var this$1 = these;
    these = this$1.tail__sci_List()
  }
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "List"
});
$c_sci_List.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOptimized__apply__I__O(this, n)
});
$c_sci_List.prototype.drop__I__sc_LinearSeqOptimized = (function(n) {
  return this.drop__I__sci_List(n)
});
function $is_sci_List(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_List)))
}
function $as_sci_List(obj) {
  return (($is_sci_List(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
/** @constructor */
function $c_sci_$colon$colon(head, tl) {
  this.head$5 = null;
  this.tl$5 = null;
  this.head$5 = head;
  this.tl$5 = tl
}
$c_sci_$colon$colon.prototype = new $h_sci_List();
$c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
  /*<skip>*/
}
$h_sci_$colon$colon.prototype = $c_sci_$colon$colon.prototype;
$c_sci_$colon$colon.prototype.head__O = (function() {
  return this.head$5
});
$c_sci_$colon$colon.prototype.tail__sci_List = (function() {
  return this.tl$5
});
$c_sci_$colon$colon.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_$colon$colon.prototype.productPrefix__T = (function() {
  return "::"
});
$c_sci_$colon$colon.prototype.productArity__I = (function() {
  return 2
});
$c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.head$5;
      break
    }
    case 1: {
      return this.tl$5;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__init___T(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_$colon$colon.prototype.tail__O = (function() {
  return this.tl$5
});
var $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  s_Product: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
/** @constructor */
function $c_sci_Nil$() {
  /*<skip>*/
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
  /*<skip>*/
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.isEmpty__Z = (function() {
  return true
});
$c_sci_Nil$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list")
});
$c_sci_Nil$.prototype.tail__sci_List = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list")
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil"
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  throw $ct_jl_IndexOutOfBoundsException__init___T(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_Nil$.prototype.tail__O = (function() {
  return this.tail__sci_List()
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  s_Product: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
var $n_sci_Nil$ = (void 0);
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
/** @constructor */
function $c_scm_AbstractBuffer() {
  /*<skip>*/
}
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
  /*<skip>*/
}
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
function $p_scm_ListBuffer__copy__V($thiz) {
  _return: {
    if ($thiz.isEmpty__Z()) {
      break _return
    };
    var cursor = $thiz.scala$collection$mutable$ListBuffer$$start$6;
    var this$1 = $thiz.last0$6;
    var limit = this$1.tl$5;
    $thiz.clear__V();
    while ((cursor !== limit)) {
      $thiz.$$plus$eq__O__scm_ListBuffer(cursor.head__O());
      var this$2 = cursor;
      cursor = this$2.tail__sci_List()
    }
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.scala$collection$mutable$ListBuffer$$start$6 = null;
  this.last0$6 = null;
  this.exported$6 = false;
  this.len$6 = 0;
  this.scala$collection$mutable$ListBuffer$$start$6 = $m_sci_Nil$();
  this.exported$6 = false;
  this.len$6 = 0
}
$c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ListBuffer.prototype.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
  /*<skip>*/
}
$h_scm_ListBuffer.prototype = $c_scm_ListBuffer.prototype;
$c_scm_ListBuffer.prototype.foreach__F1__V = (function(f) {
  var this$1 = this.scala$collection$mutable$ListBuffer$$start$6;
  var these = this$1;
  while ((!these.isEmpty__Z())) {
    f.apply__O__O(these.head__O());
    var this$2 = these;
    these = this$2.tail__sci_List()
  }
});
$c_scm_ListBuffer.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  var this$1 = this.scala$collection$mutable$ListBuffer$$start$6;
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this$1, start, sep, end)
});
$c_scm_ListBuffer.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  var this$1 = this.scala$collection$mutable$ListBuffer$$start$6;
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this$1, b, start, sep, end)
});
$c_scm_ListBuffer.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_ListBuffer.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_ListBuffer$()
});
$c_scm_ListBuffer.prototype.isEmpty__Z = (function() {
  return (this.len$6 === 0)
});
$c_scm_ListBuffer.prototype.apply__I__O = (function(n) {
  if (((n < 0) || (n >= this.len$6))) {
    throw $ct_jl_IndexOutOfBoundsException__init___T(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  } else {
    var this$2 = this.scala$collection$mutable$ListBuffer$$start$6;
    return $f_sc_LinearSeqOptimized__apply__I__O(this$2, n)
  }
});
$c_scm_ListBuffer.prototype.$$plus$eq__O__scm_ListBuffer = (function(x) {
  if (this.exported$6) {
    $p_scm_ListBuffer__copy__V(this)
  };
  if (this.isEmpty__Z()) {
    this.last0$6 = new $c_sci_$colon$colon(x, $m_sci_Nil$());
    this.scala$collection$mutable$ListBuffer$$start$6 = this.last0$6
  } else {
    var last1 = this.last0$6;
    this.last0$6 = new $c_sci_$colon$colon(x, $m_sci_Nil$());
    last1.tl$5 = this.last0$6
  };
  this.len$6 = ((1 + this.len$6) | 0);
  return this
});
$c_scm_ListBuffer.prototype.$$plus$plus$eq__sc_TraversableOnce__scm_ListBuffer = (function(xs) {
  while (true) {
    var x1 = xs;
    if ((x1 !== null)) {
      if ((x1 === this)) {
        var n = this.len$6;
        xs = $as_sc_TraversableOnce($f_sc_IterableLike__take__I__O(this, n));
        continue
      }
    };
    return $as_scm_ListBuffer($f_scg_Growable__$$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
  }
});
$c_scm_ListBuffer.prototype.clear__V = (function() {
  this.scala$collection$mutable$ListBuffer$$start$6 = $m_sci_Nil$();
  this.last0$6 = null;
  this.exported$6 = false;
  this.len$6 = 0
});
$c_scm_ListBuffer.prototype.toList__sci_List = (function() {
  this.exported$6 = (!this.isEmpty__Z());
  return this.scala$collection$mutable$ListBuffer$$start$6
});
$c_scm_ListBuffer.prototype.prependToList__sci_List__sci_List = (function(xs) {
  if (this.isEmpty__Z()) {
    return xs
  } else {
    if (this.exported$6) {
      $p_scm_ListBuffer__copy__V(this)
    };
    this.last0$6.tl$5 = xs;
    return this.toList__sci_List()
  }
});
$c_scm_ListBuffer.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_ListBuffer$$anon$1(this)
});
$c_scm_ListBuffer.prototype.stringPrefix__T = (function() {
  return "ListBuffer"
});
$c_scm_ListBuffer.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_ListBuffer.prototype.result__O = (function() {
  return this.toList__sci_List()
});
$c_scm_ListBuffer.prototype.$$plus$eq__O__scg_Growable = (function(elem) {
  return this.$$plus$eq__O__scm_ListBuffer(elem)
});
$c_scm_ListBuffer.prototype.$$plus$eq__O__scm_Builder = (function(elem) {
  return this.$$plus$eq__O__scm_ListBuffer(elem)
});
$c_scm_ListBuffer.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
function $is_scm_ListBuffer(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_ListBuffer)))
}
function $as_scm_ListBuffer(obj) {
  return (($is_scm_ListBuffer(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"))
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth))
}
var $d_scm_ListBuffer = new $TypeData().initClass({
  scm_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", {
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_SeqForwarder: 1,
  scg_IterableForwarder: 1,
  scg_TraversableForwarder: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer.prototype.$classData = $d_scm_ListBuffer;
function $ct_scm_StringBuilder__init___jl_StringBuilder($thiz, underlying) {
  $thiz.underlying$5 = underlying;
  return $thiz
}
function $ct_scm_StringBuilder__init___I__T($thiz, initCapacity, initValue) {
  var this$1 = $ct_jl_StringBuilder__init___I(new $c_jl_StringBuilder(), (($uI(initValue.length) + initCapacity) | 0));
  this$1.java$lang$StringBuilder$$content$f = (("" + this$1.java$lang$StringBuilder$$content$f) + initValue);
  $ct_scm_StringBuilder__init___jl_StringBuilder($thiz, this$1);
  return $thiz
}
function $ct_scm_StringBuilder__init___($thiz) {
  $ct_scm_StringBuilder__init___I__T($thiz, 16, "");
  return $thiz
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.underlying$5 = null
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
  /*<skip>*/
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_StringBuilder.prototype.foreach__F1__V = (function(f) {
  $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
});
$c_scm_StringBuilder.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_IndexedSeq$()
});
$c_scm_StringBuilder.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqLike$Elements(this, 0, this.underlying$5.length__I())
});
$c_scm_StringBuilder.prototype.sizeHintIfCheap__I = (function() {
  return this.underlying$5.length__I()
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return this.underlying$5.length__I()
});
$c_scm_StringBuilder.prototype.$$plus$eq__C__scm_StringBuilder = (function(x) {
  this.append__C__scm_StringBuilder(x);
  return this
});
$c_scm_StringBuilder.prototype.append__O__scm_StringBuilder = (function(x) {
  var this$2 = this.underlying$5;
  var str = ("" + x);
  this$2.java$lang$StringBuilder$$content$f = (this$2.java$lang$StringBuilder$$content$f + str);
  return this
});
$c_scm_StringBuilder.prototype.append__T__scm_StringBuilder = (function(s) {
  var this$1 = this.underlying$5;
  this$1.java$lang$StringBuilder$$content$f = (("" + this$1.java$lang$StringBuilder$$content$f) + s);
  return this
});
$c_scm_StringBuilder.prototype.append__C__scm_StringBuilder = (function(x) {
  var this$1 = this.underlying$5;
  var str = $as_T(String.fromCharCode(x));
  this$1.java$lang$StringBuilder$$content$f = (("" + this$1.java$lang$StringBuilder$$content$f) + str);
  return this
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return this.underlying$5.java$lang$StringBuilder$$content$f
});
$c_scm_StringBuilder.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_StringBuilder.prototype.result__O = (function() {
  return this.underlying$5.java$lang$StringBuilder$$content$f
});
$c_scm_StringBuilder.prototype.$$plus$eq__O__scg_Growable = (function(elem) {
  return this.$$plus$eq__C__scm_StringBuilder($uC(elem))
});
$c_scm_StringBuilder.prototype.$$plus$eq__O__scm_Builder = (function(elem) {
  return this.$$plus$eq__C__scm_StringBuilder($uC(elem))
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return $bC(this.underlying$5.charAt__I__C(index))
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(idx) {
  return $bC(this.underlying$5.charAt__I__C(idx))
});
$c_scm_StringBuilder.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_GrowingBuilder($ct_scm_StringBuilder__init___(new $c_scm_StringBuilder()))
});
var $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  jl_CharSequence: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  sci_StringLike: 1,
  sc_IndexedSeqOptimized: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
function $ct_sjs_js_WrappedArray__init___sjs_js_Array($thiz, array) {
  $thiz.array$6 = array;
  return $thiz
}
function $ct_sjs_js_WrappedArray__init___($thiz) {
  $ct_sjs_js_WrappedArray__init___sjs_js_Array($thiz, []);
  return $thiz
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.array$6 = null
}
$c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$c_sjs_js_WrappedArray.prototype.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray.prototype = $c_sjs_js_WrappedArray.prototype;
$c_sjs_js_WrappedArray.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sjs_js_WrappedArray.prototype.foreach__F1__V = (function(f) {
  $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
});
$c_sjs_js_WrappedArray.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sjs_js_WrappedArray.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqLike$Elements(this, 0, $uI(this.array$6.length))
});
$c_sjs_js_WrappedArray.prototype.sizeHintIfCheap__I = (function() {
  return $uI(this.array$6.length)
});
$c_sjs_js_WrappedArray.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sjs_js_WrappedArray$()
});
$c_sjs_js_WrappedArray.prototype.apply__I__O = (function(index) {
  return this.array$6[index]
});
$c_sjs_js_WrappedArray.prototype.length__I = (function() {
  return $uI(this.array$6.length)
});
$c_sjs_js_WrappedArray.prototype.stringPrefix__T = (function() {
  return "WrappedArray"
});
$c_sjs_js_WrappedArray.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.result__O = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.$$plus$eq__O__scg_Growable = (function(elem) {
  this.array$6.push(elem);
  return this
});
$c_sjs_js_WrappedArray.prototype.$$plus$eq__O__scm_Builder = (function(elem) {
  this.array$6.push(elem);
  return this
});
$c_sjs_js_WrappedArray.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.array$6[index]
});
function $is_sjs_js_WrappedArray(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sjs_js_WrappedArray)))
}
function $as_sjs_js_WrappedArray(obj) {
  return (($is_sjs_js_WrappedArray(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"))
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)))
}
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth))
}
var $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  scm_Builder: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
function $ct_scm_ArrayBuffer__init___I($thiz, initialSize) {
  $thiz.initialSize$6 = initialSize;
  $f_scm_ResizableArray__$$init$__V($thiz);
  return $thiz
}
function $ct_scm_ArrayBuffer__init___($thiz) {
  $ct_scm_ArrayBuffer__init___I($thiz, 16);
  return $thiz
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.initialSize$6 = 0;
  this.array$6 = null;
  this.size0$6 = 0
}
$c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ArrayBuffer.prototype.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
  /*<skip>*/
}
$h_scm_ArrayBuffer.prototype = $c_scm_ArrayBuffer.prototype;
$c_scm_ArrayBuffer.prototype.length__I = (function() {
  return this.size0$6
});
$c_scm_ArrayBuffer.prototype.apply__I__O = (function(idx) {
  return $f_scm_ResizableArray__apply__I__O(this, idx)
});
$c_scm_ArrayBuffer.prototype.foreach__F1__V = (function(f) {
  $f_scm_ResizableArray__foreach__F1__V(this, f)
});
$c_scm_ArrayBuffer.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_scm_ArrayBuffer.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqLike$Elements(this, 0, this.size0$6)
});
$c_scm_ArrayBuffer.prototype.sizeHintIfCheap__I = (function() {
  return this.size0$6
});
$c_scm_ArrayBuffer.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_ArrayBuffer$()
});
$c_scm_ArrayBuffer.prototype.sizeHint__I__V = (function(len) {
  if (((len > this.size0$6) && (len >= 1))) {
    var newarray = $newArrayObject($d_O.getArrayOf(), [len]);
    $systemArraycopy(this.array$6, 0, newarray, 0, this.size0$6);
    this.array$6 = newarray
  }
});
$c_scm_ArrayBuffer.prototype.$$plus$eq__O__scm_ArrayBuffer = (function(elem) {
  var n = ((1 + this.size0$6) | 0);
  $f_scm_ResizableArray__ensureSize__I__V(this, n);
  this.array$6.set(this.size0$6, elem);
  this.size0$6 = ((1 + this.size0$6) | 0);
  return this
});
$c_scm_ArrayBuffer.prototype.stringPrefix__T = (function() {
  return "ArrayBuffer"
});
$c_scm_ArrayBuffer.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.apply__O__O = (function(v1) {
  var idx = $uI(v1);
  return $f_scm_ResizableArray__apply__I__O(this, idx)
});
$c_scm_ArrayBuffer.prototype.result__O = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.$$plus$eq__O__scg_Growable = (function(elem) {
  return this.$$plus$eq__O__scm_ArrayBuffer(elem)
});
$c_scm_ArrayBuffer.prototype.$$plus$eq__O__scm_Builder = (function(elem) {
  return this.$$plus$eq__O__scm_ArrayBuffer(elem)
});
var $d_scm_ArrayBuffer = new $TypeData().initClass({
  scm_ArrayBuffer: 0
}, false, "scala.collection.mutable.ArrayBuffer", {
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_IndexedSeqOptimized: 1,
  scm_IndexedSeqLike: 1,
  sc_IndexedSeqLike: 1,
  sc_IndexedSeqOptimized: 1,
  scm_Builder: 1,
  scm_ResizableArray: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer.prototype.$classData = $d_scm_ArrayBuffer;
$L0 = new $c_sjsr_RuntimeLong(0, 0);
let $e_AppoloniusGenerator = $m_Lclewin_scala_AppoloniusGenerator$();
export { $e_AppoloniusGenerator as AppoloniusGenerator };
let $e_GrandmaGenerator = $m_Lclewin_scala_GrandmaGenerator$();
export { $e_GrandmaGenerator as GrandmaGenerator };
let $e_RecursiveLinePlot = (function(arg$1, arg$2, arg$3) {
  var prep0 = $as_Lclewin_scala_MobiusGenerator(arg$1);
  var prep1 = $uI(arg$2);
  var prep2 = $uD(arg$3);
  return new $c_Lclewin_scala_RecursiveLinePlot(prep0, prep1, prep2)
});
export { $e_RecursiveLinePlot as RecursiveLinePlot };
//# sourceMappingURL=indras-pearls-fastopt.js.map
