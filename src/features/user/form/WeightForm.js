import React from "react";
import { Button, Header, Icon, Modal, Form, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const WeightForm = () => {
  return (
    <Modal
      size="mini"
      trigger={<Button circular color="blue" icon="plus"></Button>}
      centered={false}
      closeIcon
    >
      <Modal.Header>Add Today's Weight</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field label="Weight" control="input" type="number" />
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
