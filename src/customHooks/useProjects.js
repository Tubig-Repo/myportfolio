import { useState, useEffect } from "react";
import { getProjectsData } from "../contentful";
const promise = getProjectsData();
export default function useProjects() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((res) => {
      setProject(res);
      setLoading(false);
    });
  }, [promise]);

  return [project, loading];
}
