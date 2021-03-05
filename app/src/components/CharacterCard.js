export const CharacterCard = (props) => {
  const { name, species, status, image, location } = props.character;
  console.log("props", props);

  return (
    <>
      <div>
        <div>
          <img src={image} alt={name} />
          <h3> {name}</h3>
          <p>{species}</p>
          <p>Status : {status}</p>
          <p>Location: {location.name}</p>
        </div>
      </div>
    </>
  );
};
