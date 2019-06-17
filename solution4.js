var obj = {
  firstName: 'Kapil',
  lastName: 'Pandey'
}
var property = 'firstName'

const hasProperty = (obj, property) => obj.hasOwnProperty(property)

const hasProp = hasProperty(obj, property)
hasProp ? console.log("Object contains given property") : console.log('Object does not contain given property')
