import { useState, useEffect } from "react";
import { getIntroductionData } from "../contentful";
const promise = getIntroductionData();
export default function useIntroduction() {
  const [introduction, setIntroduction] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((res) => {
      setIntroduction(res[0].fields);
      setLoading(false);
    });
  }, [promise]);

  return [introduction, loading];
}
