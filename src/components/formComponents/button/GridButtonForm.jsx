import GridButton from "./GridButton";
import Button from "./Button";
const GridButtonForm = ({ onClick, nameButtonSubmit }) => {
  return (
    <GridButton>
      <Button type="reset" name="Cancel" onClick={onClick} />
      <Button type="submit" name={nameButtonSubmit} />
    </GridButton>
  );
};

export default GridButtonForm;
