"use client";

import { createContext } from "react";
import { Player } from "./model";

type PlayerContextProps = {
  pending: boolean;
  player?: Player;
  logIn: (name: string) => void;
  logOut: () => void;
};

export const PlayerContext = createContext<PlayerContextProps | null>(null);
