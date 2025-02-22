import React from 'react'
import Profile from "./Profile"
import PersonContext from "../Components/PersonContext";
import { useContext } from 'react';

const PersonList = ({updateVideo}) => {
  const persons = useContext(PersonContext);
  return (
    <div>
      {persons.map((person) => {
        return (
          <div key={Math.random()}>
            <Profile
              key={Math.random()}
              id={person.id}
              name={person.name}
              age={person.age}
              job={person.job}
              updateVideo={updateVideo}
            ></Profile>
          </div>
        );
      })}
    </div>
  )
}

export default PersonList
