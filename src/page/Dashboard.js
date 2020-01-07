import React, { Component } from "react";
import ColdSection from "../component/ColdSection";
import FrozenSection from "../component/FrozenSection";
import ShoppingNotes from "../component/ShoppingNotes";
import DayMenu from "../component/DayMenu";
import Chart from "../component/Chart";

function Dashboard() {
  return (
    <div>
      <ColdSection />
      <FrozenSection />
      <ShoppingNotes />
      <DayMenu />
      <Chart />
    </div>
  );
}

export default Dashboard;
