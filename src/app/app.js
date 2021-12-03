export const run = (componentService) => {
  componentService.onClickIncrement(() => {
    componentService.counter = componentService.counter + 1;
    componentService.setResult(componentService.counter);
  });
  componentService.onClickDecrement(() => {
    componentService.counter = componentService.counter - 1;
    componentService.setResult(componentService.counter);
  });
};
