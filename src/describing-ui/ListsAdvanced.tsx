interface Person {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}

const people: Person[] = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

const getImageUrl = (person: Person): string => {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
};

const formatList = (listKey: string, list: Person[]) => {
  const formattedItems = list.map((person) => {
    return (
      <li key={listKey + person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    );
  });

  return formattedItems;
};

const ListsAdvanced = () => {
  const chemists = people.filter((person) => person.profession === "chemist");

  const listAll = formatList("all", people);
  const listChemists = formatList("chemists", chemists);

  return (
    <ul>
      <h1> All Scientists </h1>
      {listAll}
      <h1> Chemists Only </h1>
      {listChemists}
    </ul>
  );
};

export default ListsAdvanced;
