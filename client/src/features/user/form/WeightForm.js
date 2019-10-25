import React from "react";
import { Button, Modal, Form, Label } from "semantic-ui-react";

const WeightForm = props => {
  return (
    <Modal
      size="mini"
      // trigger={<Button primary circular className="info" icon="plus"></Button>}
      centered={false}
      closeIcon
      open={props.modalOpen}
      onClose={() => props.setModalOpen(false)}
    >
      {/* <Modal.Header>Add Weight</Modal.Header> */}
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={props.handleSubmit}>
            <Label name="date">{props.weight.date}</Label>
            <Form.Field
              name="weight"
              label="Weight"
              control="input"
              type="number"
              onChange={props.handleChange}
              value={props.weight.weight}
            />
            <Form.Field>
              <Button type="submit">Submit</Button>
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default WeightForm;
