import React, { ReactNode } from "react";

export interface InputBoxInterface {
  type: string;
  placeHolder: string;
  height: string;
  width: string;
  onChangeValue: (value: {}) => void;
  name: string | undefined;
  value: string | number;
}

export interface ButtonInterface {
  height: string;
  width: string;
  bColor: string;
  name: string;
  BtnClick: () => void;
}

export interface LSTemplateInterface {
  title: string;
  InputComponent: React.ReactNode[];
  link: string;
  BtnComponent: React.ReactNode;
  rboxHeight: string;
  linkText: string;
  linkName: string;
}

export interface BoxInterface {
  title: string;
  image: string;
  btnfnc: () => {};
}

export interface CboxInterface {
  image: string;
  hedding: string;
  discription: string;
  lesson: string;
  payment: string;
}

export interface syllobusInterface {
  obj: {
    title: string;
    id: string;
    arrayLesson: string[];
  };
  index: number;
}

export interface ModalInterface {
  html: ReactNode;
  closeFunc: () => void;
}

export interface ConversationboxInterface {
  gobackBtn: () => void;
  data: {
    name: string;
    lastMessageTime: string;
    id: number;
    previousMessages: [
      {
        sender_id: number;
        receiver_id: number;
        message: string;
        timestamp: number;
      }
    ];
  };
}
export interface chatboxInterface {
  image: string | null;
  name: string;
  lastMsgTime: string;
  lastMessage: string;
  id: number;
  idPicker: (id: number) => void;
}
export interface dialogboxInterface {
  chat: [
    {
      sender_id: number;
      receiver_id: number;
      message: string;
    }
  ];
  senderId: number;
}

export interface DashboardBox{
  titleText:string
  mainData:string
}