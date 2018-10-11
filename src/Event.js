import React from 'react'


// import EmailTable from './App';

// const emails = [
//   { id: 124, name: 'Den', email: 'milo@mail.ru'},
//   { id: 654654, name: 'Dsadasden', email: 'msadilo@mail.ru'},
//   { id: 5654898, name: '6sdasd', email: 'milsaddo@mail.ru'},
// ]
// const loadPage = e => {
//   e.preventDefault()
//   console.log('target - type ►', e.type)
//   console.log('target - bubbles ►', e.bubbles)
//   console.log('target - currentTarget ►', e.currentTarget)
//   console.log('target  - isdefaultPrevented ►', e.isDefaultPrevented)
// }

// const button = (
//   <a onClick={loadPage} href='http://mail.ru'>Новая кнопка</a>
// )

/* Вывод значения из инпута
  const getSurname = e => {
  console.log(e.currentTarget.value)
} */

//перевод первой буквы в верхний регистр


let surnameField, 
    genderField, 
    cityField, form

const getGender = e => {
  console.log(e.target.value)
  genderField= e.target.value
}
const getCity = e => {
  console.log(e.target.value)
}

const getSurname = e => {
const field = e.currentTarget
field.value = firstToUpper(field.value)
console.log(field.value)
}

const firstToUpper = string => {
if(!string) return string
const first = string[0].toUpperCase()
const other = string.slice(1).toLowerCase()
return `${first}${other}`
} 

const saveForm = () => {
  genderField = form.querySelector('input[type=radio]:checked')
  console.log(`
  Фамилия : ${surnameField.value},
  пол : ${genderField.value},
  город : ${cityField.value}`
  )
}

const city = (
  <select defaultValue={0} onChange={getCity} ref = {element => cityField = element}>
    <option value='0'> Выберите город </option>
    <option value='Москва'> Москва </option>
    <option value='Казань'> Казань </option>
    <option value='Кулебаки'> Кулебаки </option>
  </select>
)
const surname = (
  <input 
    ref = {element => surnameField = element}
    type = 'text' 
    placeholder = 'Фамилия' 
    onChange = {getSurname}
  /> 
)

const gender = (
  <div ref = {element => form = element}>
    <label>
      Муржской
      <input defaultChecked type="radio" name="gender" value="male" onChange={getGender}/>
    </label>
    <label>
      Женский
      <input type="radio" name="gender" value="female" onChange={getGender}/>
    </label>
  </div>
)

const event = (
  <div>
    {surname}
    {city}
    {gender}
    <input type='button' value='Сохранить' onClick={saveForm}/>
  </div>
)

export default event