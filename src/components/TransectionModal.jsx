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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../features/expenseApp/expenseAppSlice";

const TransectionModal = ({ isOpen, onOpen, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    detail: "",
    amount: 0,
    type: "",
  });
  //   console.log(expenseData);
  //handler functions for formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    onClose();
    dispatch(addExpense(formData));
  };
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
                onChange={(e) => handleChange(e)}
                name='detail'
                type='text'
                value={formData.detail}
                placeholder='Enter Transection Detail'
              />
              <FormLabel mt={"2"}>Amount</FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                name='amount'
                type='number'
                value={formData.amount}
                placeholder='Enter Transection Amount'
              />
              <Divider m={"5"} />
              <RadioGroup>
                <Radio
                  name='type'
                  value='income'
                  mr={"10"}
                  onChange={(e) => handleChange(e)}>
                  Income
                </Radio>
                <Radio
                  name='type'
                  value='expense'
                  onChange={(e) => handleChange(e)}>
                  Expense
                </Radio>
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
              //   onClick={onClose}
              onClick={handleSubmit}
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
