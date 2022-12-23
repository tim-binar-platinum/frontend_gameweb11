import { useState } from "react";
import UploadButton from "./components/UploadButton";

function Test() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="test">
      <UploadButton />
    </div>
  );
}

export default Test;
