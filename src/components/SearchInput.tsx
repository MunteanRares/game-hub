import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) console.log(ref.current.value);
        }}
      >
        <InputGroup startElement={<BsSearch />}>
          <Input
            ref={ref}
            marginX={10}
            borderRadius={15}
            placeholder="Search Games..."
            variant="subtle"
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
