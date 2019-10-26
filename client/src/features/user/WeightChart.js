import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { connect } from "react-redux";

const WeightChart = props => {
  const [weights, setWeights] = useState([
    {
      id: "Weight",
      color: "hsl(166, 45%, 72%)",
      data: []
    }
  ]);

  useEffect(() => {
    if (props.currentUser && props.currentUser.weights) {
      let data = props.currentUser.weights
        .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
        .map(weight => ({
          x: new Date(weight.created_at).toLocaleDateString("en-US"),
          y: weight.weight
        }));

      setWeights([{ ...weights[0], data: data }]);
    }
  }, [setWeights, props.currentUser]);

  return (
    <ResponsiveLine
      data={weights}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", stacked: true }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Date (MM/DD/YYYY)",
        legendOffset: 36,
        legendPosition: "middle"
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: `Weight ${
          props.currentUser ? "(" + props.currentUser.weight_unit + "s)" : ""
        }`,
        legendOffset: -40,
        legendPosition: "middle"
      }}
      colors={{ scheme: "set2" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      enableSlices="x"
      sliceTooltip={({ slice }) => {
        return (
          <div
            style={{
              background: "white",
              padding: "9px 12px",
              border: "1px solid #ccc"
            }}
          >
            {slice.points.map(point => (
              <div
                key={point.id}
                style={{
                  color: point.serieColor,
                  padding: "3px 0"
                }}
              >
                <strong>Date</strong>: {point.data.xFormatted}
                <br />
                <strong>{point.serieId}</strong>: {point.data.yFormatted}{" "}
                {props.currentUser ? props.currentUser.weight_unit : ""}
              </div>
            ))}
          </div>
        );
      }}
    />
  );
};

let mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser
  };
};

export default connect(mapStateToProps)(WeightChart);
