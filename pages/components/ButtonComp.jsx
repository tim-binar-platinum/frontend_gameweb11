import { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import styles from "../../styles/Button.module.css";

function ButtonComp({ onClick, loading }) {
  const [showSpinner, setShowSpinner] = useState(loading);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setShowSpinner(false);
      }, 3000);
    }
  }, [loading]);

  return (
    <>
      <Button variant="primary" onClick={() => onClick()}>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          hidden={!showSpinner}
        />
        Submit
      </Button>
    </>
  );
}

export default ButtonComp;
