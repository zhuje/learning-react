# Notes 

## Conditional Rendering 

### Typing Props  
1. 
```
const Component1 = () = > {
 interface ItemProps {
  name: string;
  isPacked: boolean;
 }
 const Item: React.FC<ItemProps> = ({ name, isPacked }) => {
    ...
 }

 ... 
 return (
    <div>
        <Item name="toothbrush" isPacked={false} />
        <Item name="shirt" isPacked={true} />
    </div>
 )

}

 // OR 

 const Component2 = () => {
    const getItem = ( name: string, isPacked:boolean ) => {
        ...
    }
    
    const toothbrush = getItem("toothbrush", false)
    const shirt = getItem("shirt", true)

    return (
        <div>
            {toothbrush}
            {shirt}
        <div>
    )
 } 
```

### Lists 
#### Syntax 
``` 
// implicit return for 1-liners
const list = people.map(person => <li key=person.id> person.name </li>)

// explicit returns (e.g. {return ... }) for 2+ lines/code blocks
const list = people.map((person) => { return <li key=person.id> person.name </li>})
```
#### Unique Keys 
Each list item should have a unique key. Keys should always be included in your data and should not be randomly generated. This allows React to trace when items (e.g. add/delete/move/edit items).

```
const Component3 = () => {
    const person1 = {
        name: "abby",
        id: "123"
    }
    const person2 = {
        name: "bob",
        id: "234"
    }
    const person3 = {
        name: "cat",
        id: "345"
    }

    return (
        <ul>
            <li key="person1.id">
                {person1.name}
            </li>
            <li key="person2.id">
                {person2.name}
            </li>
            <li key="person3.id">
                {person3.name}
            </li>
        </ul>
    )

}

```