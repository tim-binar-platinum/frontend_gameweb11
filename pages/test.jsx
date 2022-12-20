
import { useState } from "react";
import ButtonComp from "./components/ButtonComp";

function Test() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <ButtonComp loading={loading} onClick={() => setLoading(!loading)} />
    </div>
  );
}

export default Test;
