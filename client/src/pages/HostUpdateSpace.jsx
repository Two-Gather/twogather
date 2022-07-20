import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HostSpaceForm from "../components/host/HostSpaceForm.jsx";
import * as Api from "../api";

export default function HostUpdateSpace() {
  const [data, setData] = useState(false);
  const { spaceId } = useParams();

  useEffect(() => {
    async function getData() {
      const res = await Api.get(`api/spaces/${spaceId}`);
      const datas = res.data.data;
      setData(datas);
      console.log(data);
    }
    getData();
  }, []);

  return data && <HostSpaceForm mode="UPDATE" data={data}></HostSpaceForm>;
}
