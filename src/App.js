import * as React from "react";
import keycon from "keycon";
import Moveable from "react-moveable";
import { throttle } from "@daybrush/utils";
import { PieChart } from 'react-minimal-pie-chart';
import { BarChart } from '@mui/x-charts/BarChart';

keycon.setGlobal();

export default function App() {
  return (
    <div className="root">
      <div className="container A4" style={{
        width: "895px",
        height: "707px",
        border: "1px solid black",
      }}>
        <div className="target resizable" style={{
          position: "absolute",
          width: "200px",
          height: "100px",
          top: "50px",
        }}><PieChart
            data={[
              { title: 'One', value: 10, color: '#E38627' },
              { title: 'Two', value: 15, color: '#C13C37' },
              { title: 'Three', value: 20, color: '#6A2135' },
            ]}
          /></div>
        <div className="target scalable" style={{
          position: "absolute",
          width: "200px",
          height: "100px",
          top: "150px",
          left: "350px",
        }}><BarChart
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
          /></div>
        <Moveable
          target={".target.resizable"}
          resizable={true}
          // keepRatio={true}
          draggable={true}
          rotatable={true}
          snappable={true}
          bounds={{ left: 0, top: 0, bottom: 0, right: 0, position: "css" }}
          onResizeStart={e => {
            e.setFixedDirection([0, 0]);
          }}
          onDrag={e => {
            e.target.style.transform = e.transform;
          }}
          onBeforeResize={e => {
            if (keycon.global.shiftKey) {
              e.setFixedDirection([-1, -1]);
            } else {
              e.setFixedDirection([0, 0]);
            }
          }}
          onResize={e => {
            e.target.style.cssText += `width: ${e.width}px; height: ${e.height}px`;
            e.target.style.transform = e.drag.transform;
          }}
          onBeforeRotate={e => {
            e.setRotation(throttle(e.rotation, 45));
          }}
          onRotate={e => {
            e.target.style.transform = e.drag.transform;
          }}
        />
        <Moveable
          target={".target.scalable"}
          resizable={true}
          // keepRatio={true}
          draggable={true}
          rotatable={true}
          snappable={true}
          bounds={{ left: 0, top: 0, bottom: 0, right: 0, position: "css" }}
          onResizeStart={e => {
            e.setFixedDirection([0, 0]);
          }}
          onDrag={e => {
            e.target.style.transform = e.transform;
          }}
          onBeforeResize={e => {
            if (keycon.global.shiftKey) {
              e.setFixedDirection([-1, -1]);
            } else {
              e.setFixedDirection([0, 0]);
            }
          }}
          onResize={e => {
            e.target.style.cssText += `width: ${e.width}px; height: ${e.height}px`;
            e.target.style.transform = e.drag.transform;
          }}
          onBeforeRotate={e => {
            e.setRotation(throttle(e.rotation, 45));
          }}
          onRotate={e => {
            e.target.style.transform = e.drag.transform;
          }}
        />
      </div>
    </div>
  );
}