import React, { useState, useRef } from "react";
import styled from "styled-components";
import PostcodePopup from "../components/admin/PostcodePopup";
import HostSpaceForm from "../components/host/HostSpaceForm.jsx";

export default function HostUpdateSpace() {
  return <HostSpaceForm mode="UPDATE"></HostSpaceForm>;
}
