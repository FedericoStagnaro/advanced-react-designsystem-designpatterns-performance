import { useState, useTransition } from "react";
import Cover from "./cover";
import Reviews from "./reviews";
import Writer from "./writer";
import { StyledButton } from "./styled-elements";

/**
 * IMPORTANT:
 * Differences between useDeferredValue and useTransition
 * useDeferredValue delays the reading of a value
 * useTransitions delays the updating of a value, works on setState expresion as (useState)
 */

export function UseTransitionExample() {
  const [section, setSection] = useState("Cover");
  const [isPending, startTransition] = useTransition();

  const sectionHandler = (sec) => {
    // allows us to change the state even if the rendering has no finished
    startTransition(()=>{
        setSection(sec);
    })
  };
  return (
    <>
      <Button onClick={() => sectionHandler("Cover")}>Cover</Button>
      <Button onClick={() => sectionHandler("Reviews")}>Book Reviews</Button>
      <Button onClick={() => sectionHandler("Writer")}>Book's Writer</Button>

    {isPending && "Is Pending..."}
      {section === "Cover" ? (
        <Cover />
      ) : section === "Reviews" ? (
        <Reviews />
      ) : (
        <Writer />
      )}
    </>
  );
}

const Button = ({ onClick, ...props }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <StyledButton
      onClick={() => {
        startTransition(() => {
          onClick();
        });
      }}
      {...props}
    />
  );
};

