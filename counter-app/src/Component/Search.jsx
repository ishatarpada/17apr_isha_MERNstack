import React, { useState } from 'react'

export default function Search() {

  const [input, setInput] = useState("");
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Apricot" },
    { id: 3, name: "Avocado" },
    { id: 4, name: "Banana" },
    { id: 5, name: "Blackberry" },
    { id: 6, name: "Blackcurrant" },
    { id: 7, name: "Blueberry" },
    { id: 8, name: "Boysenberry" },
    { id: 9, name: "Cantaloupe" },
    { id: 10, name: "Cherry" },
    { id: 11, name: "Clementine" },
    { id: 12, name: "Coconut" },
    { id: 13, name: "Cranberry" },
    { id: 14, name: "Date" },
    { id: 15, name: "Dragonfruit" },
    { id: 16, name: "Durian" },
    { id: 17, name: "Elderberry" },
    { id: 18, name: "Feijoa" },
    { id: 19, name: "Fig" },
    { id: 20, name: "Goji berry" },
    { id: 21, name: "Gooseberry" },
    { id: 22, name: "Grape" },
    { id: 23, name: "Grapefruit" },
    { id: 24, name: "Guava" },
    { id: 25, name: "Honeyberry" },
    { id: 26, name: "Honeydew melon" },
    { id: 27, name: "Huckleberry" },
    { id: 28, name: "Jackfruit" },
    { id: 29, name: "Jujube" },
    { id: 30, name: "Kiwano (horned melon)" },
    { id: 31, name: "Kiwi" },
    { id: 32, name: "Kumquat" },
    { id: 33, name: "Lemon" },
    { id: 34, name: "Lime" },
    { id: 35, name: "Longan" },
    { id: 36, name: "Loquat" },
    { id: 37, name: "Lychee" },
    { id: 38, name: "Mandarin" },
    { id: 39, name: "Mango" },
    { id: 40, name: "Mangosteen" },
    { id: 41, name: "Mulberry" },
    { id: 42, name: "Nance" },
    { id: 43, name: "Nectarine" },
    { id: 44, name: "Orange" },
    { id: 45, name: "Papaya" },
    { id: 46, name: "Passionfruit" },
    { id: 47, name: "Peach" },
    { id: 48, name: "Pear" },
    { id: 49, name: "Persimmon" },
    { id: 50, name: "Pineapple" },
    { id: 51, name: "Pitaya (dragonfruit)" },
    { id: 52, name: "Plum" },
    { id: 53, name: "Pomegranate" },
    { id: 54, name: "Pomelo" },
    { id: 55, name: "Quince" }];
  const [search, setSearch] = useState(fruits)


  const handleChange = (e) => {
    const input = e.target.value;
    setInput(input)

    const filterItems = fruits.filter((fruit) => fruit.name.includes(input));

    setSearch(filterItems);
  }

  // const Data = search.filter((item) => item.includes(input));
  return (
    <>
      <div className='mx-auto p-5'>
        <input type="text" className='form-control w-50 mx-auto fw-bold' value={input}
          onChange={handleChange} placeholder='type to search'/>
      </div>

      <hr></hr>

      <ul className='list-group'>
        {
          search.map(
            fruit => <li key={fruit.id}>{fruit.name}</li>
          )
        }
      </ul>
    </>
  )
}
