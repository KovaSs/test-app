import React from 'react'
import {List, todos} from './ComponentComposition/List'
import ListItem from './ComponentComposition/ListItem'
import Section from './ComponentComposition/Section'

const App = () => (
  <div>
    <List items={todos}>
    {items => items.map((item, index) => 
      <ListItem key={index}>{item}</ListItem>
      )}
    </List>
    <Section title='Заголовок!'>
    {(isHidden) => isHidden ? null : <p>Consectetur deserunt aliqua labore ullamco sit. Cillum reprehenderit quis sint consectetur velit ea occaecat minim reprehenderit. Anim ullamco cupidatat ex eu deserunt velit.</p>}
    </Section>
  </div>
)

export default App