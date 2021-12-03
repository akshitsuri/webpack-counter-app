import { run } from "./app/app";
import "./main.scss";
import { ComponentService } from "./app/component.service";

const componentService = new ComponentService();
run(componentService);
