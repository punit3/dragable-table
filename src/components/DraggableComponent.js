import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
// import Accordion from "react-bootstrap/Accordion";
import "../styles/drag.css";
// import { updateTableData } from "../api";
// import { Col, Row } from "react-bootstrap";
import { skills } from "../data";

let headers = ["Core", "Special", "Creative"];

export const DragableComponent = (props) => {
  const [items, setItems] = useState(skills);
  useEffect(() => {
    setItems(skills);
  }, [skills]);
  //   console.log("state", items);

  const handleSearch = (event) => {
    // console.log("event")
    const filteredData = skills.filter((row) => {
      return Object.values(row).some((value) =>
        String(value).toLowerCase().includes(event.target.value)
      );
    });

    //   console.log("filter---",filteredData)
    setItems(filteredData);
  };
  return (
    <div className="layout__wrapper">
      {/* <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="layout__header">
              <div className="app-bar">
                <div className="app-bar__title">Interviews Overview</div>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body> */}
      {/* <Row>
        <Col style={{ margin: "2%" }}>
          <span>Search</span>
          <input
            style={{ width: "25%" }}
            className="mobile-globalfilter"
            onChange={handleSearch}
            placeholder="enter search value"
          />
        </Col>
      </Row> */}
      <LeadsOverview items={items} />
      {/* </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}
    </div>
  );
};

function LeadsOverview(props) {
  const [items, setItems] = useState(props.items);
  const [groups, setGroups] = useState({});

  useEffect(() => {
    const organizedAndTransformedData = organizeAndTransform(props.items);

    buildAndSave(organizedAndTransformedData);
  }, [props.items]);

  function organizeAndTransform(candidateData) {
    // debugger
    let organizedCandidatesByStatus = {};

    // Organize candidates by external_status
    console.log("items----1", candidateData);
    candidateData &&
      candidateData.forEach((candidate) => {
        // debugger

        console.log("items", candidate);
        const { skillName } = candidate;

        if (!organizedCandidatesByStatus[skillName]) {
          //   debugger;
          organizedCandidatesByStatus[skillName] = [candidate.skill];
        } else {
          organizedCandidatesByStatus[skillName].push(candidate.skill);
        }
      });
    // console.log("items----2", organizedCandidatesByStatus);
    // Include all data within "all" category
    // organizedCandidatesByStatus.all = candidateData;
    // Organize candidates by headers
    let organizedCandidatesByHeader = {};
    // debugger;
    headers.forEach((header) => {
      organizedCandidatesByHeader[header] =
        organizedCandidatesByStatus[header] || [];
    });

    // Transform data
    const transformedData = headers.map((key, index) => {
      //   debugger
      return {
        id: `${key}${Math.floor(Math.random() * 10)}`,
        label: key,
        items: organizedCandidatesByHeader[key].map((candidate) => [
          ...candidate,
        ]),
        tint: index + 1,
      };
    });

    return transformedData;
  }

  function buildAndSave(items) {
    // debugger
    const groups = {};
    for (let i = 0; i < Object.keys(items).length; ++i) {
      const currentGroup = items[i];
      groups[currentGroup.id] = i;
    }

    // Set the data.

    // debugger
    console.log("from build")
    debugger
    setItems(items);

    // Makes the groups searchable via their id.
    setGroups(groups);
  }

    console.log("items", items);

  return (
    <DragDropContext
      onDragEnd={(result) => {
        // debugger
        const { destination, draggableId, source, type } = result;

        if (!destination) {
          return;
        }

        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }

        if ("group" === type) {
          const sourceIndex = source.index;
          const targetIndex = destination.index;

          const workValue = items.slice();
          const [deletedItem] = workValue.splice(sourceIndex, 1);
          workValue.splice(targetIndex, 0, deletedItem);
          buildAndSave(workValue);

          return;
        }
        // debugger;
        const sourceDroppableIndex = groups[source.droppableId];
        const targetDroppableIndex = groups[destination.droppableId];
        const sourceItems = items[sourceDroppableIndex].items.slice()[0];
        const targetItems =
          source.droppableId !== destination.droppableId
            ? items[targetDroppableIndex].items.slice()[0]
            : sourceItems;

        const [deletedItem] = sourceItems.splice(source.index, 1);
        targetItems.splice(destination.index, 0, deletedItem);
        debugger
        const workValue = items.slice();
        workValue[sourceDroppableIndex] = {
          ...items[sourceDroppableIndex],
          items: [sourceItems],
        };
        workValue[targetDroppableIndex] = {
          ...items[targetDroppableIndex],
          items: [targetItems],
        };

      

        //   UpdateTableCandidat("external_status",updatedCandidate.mobile,)
        console.log("from update--", workValue);
        // debugger
        setItems(workValue);
      }}

      //   console
    >
      <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <div
            className="root-dnd"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items &&
              items.map((item, index) => {
                debugger
                return (
                  <Draggable draggableId={item.id} key={item.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <DroppableList key={item.id} {...item} />
                      </div>
                    )}
                  </Draggable>
                );
              })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

function DroppableList({ id, items, label, tint }) {
    debugger
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="root-dnd"
        >
          <div className={`holder holder--tint-${tint}`}>
            <div className="holder__title">{label}</div>
            <div className="holder__content">
              <ul className="list">
                {items &&
                  items.map((item, index) => {
                    // debugger;
                    return (
                      <li className="list__item" key={item.id}>
                        <div className="container-card">
                          <ul>
                            {Object.entries(item).map(([key, value]) => {
                              return (
                                <>
                                  <Draggable draggableId={value} index={index}>
                                    {(provided) => (
                                      <div
                                        className="card-dnd"
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                      >
                                        <div className="container-card">
                                          {value}
                                        </div>
                                      </div>
                                    )}
                                  </Draggable>
                                </>
                                // <li key={key}>{`${key}: ${value}`}</li>
                              );
                            })}
                          </ul>
                        </div>
                      </li>
                    );
                  })}
                {provided.placeholder}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
}
