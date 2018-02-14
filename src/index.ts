import {Modal,ModalHeader,ModalContent,ModalFooter} from "./Modal";
import {RouteModal} from "./RouteModal";
import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

export { Modal, ModalContent, ModalFooter, ModalHeader } from "./Modal";
export { RouteModal } from "./RouteModal";

@NgModule({
    imports: [ CommonModule, BrowserAnimationsModule ],
    declarations: [
        Modal,
        RouteModal,
        ModalHeader,
        ModalContent,
        ModalFooter,
    ],
    exports: [
        Modal,
        RouteModal,
        ModalHeader,
        ModalContent,
        ModalFooter,
    ],
})
export class ModalModule {

}
