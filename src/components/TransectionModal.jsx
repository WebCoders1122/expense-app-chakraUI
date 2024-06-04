import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";

const TransectionModal = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transection</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Details</FormLabel>
              <Input
                type='text'
                placeholder='Enter Transection Detail'
              />
              <FormLabel mt={"2"}>Amount</FormLabel>
              <Input
                type='number'
                placeholder='Enter Transection Amount'
              />
              <Divider m={"5"} />
              <RadioGroup>
                <Radio
                  value='income'
                  mr={"10"}>
                  Income
                </Radio>
                <Radio value='expense'>Expense</Radio>
              </RadioGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme='red'
              mr={3}
              onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme='blue'
              type='submit'>
              Add Transection
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TransectionModal;
