import React, { useState, useRef } from "react";
import styled from "styled-components";

import PostcodePopup from "../components/admin/PostcodePopup";
import HostSpaceForm from "../components/host/HostSpaceForm.jsx";

export default function AddSpace() {
  return <HostSpaceForm mode="ADD"></HostSpaceForm>;
}
