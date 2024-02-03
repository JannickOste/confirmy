
- Add deserialization for JSON/YAML. 
- Add string validation tests. 
- Add decorator support. 
- Add date support 
- Add DateTime support 
- Optimize performance
- Add logging support
- Update ClassValidator->isClass, uses string search at the moment, bad implementation and could be subject to hijacking as it uses a lowcase check or duplicate class names could also cause issues.