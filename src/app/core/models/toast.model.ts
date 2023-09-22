import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { AlertColor } from "..";

export interface Toast {
    color: AlertColor;
    message: string;
    icon: IconDefinition;
}