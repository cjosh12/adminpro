import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { AlertColor } from "../models";

export interface Toast {
    color: AlertColor;
    message: string;
    icon: IconDefinition;
}