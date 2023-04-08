import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";

import { Clock } from "@/components";
import { conditionImage } from "@/model";
import { useModal } from "@/store";
import { getDateTime } from "@/utils";

const ModalCustom = () => {
  const { isOpen, setIsOpen, selectedWeather } = useModal();

  const { day, month } = getDateTime(selectedWeather);

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-20" onClose={setIsOpen}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-auto max-w-md transform overflow-hidden rounded-2x text-left align-middle shadow-xl transition-all">
                <div className="bg-[#303030] rounded-2xl px-4 py-3">
                  <div className="flex justify-center flex-col items-center gap-4 ">
                    <div className="flex flex-col gap-1 text-center">
                      <h4 className="text-white/25 text-lg font-medium">
                        Today
                      </h4>
                      <h5 className="text-slate-50 text-lg uppercase font-medium">
                        {selectedWeather.conditions}
                      </h5>
                    </div>
                    <div className="flex justify-around gap-1 w-full ">
                      <div className="pr-3">
                        <img
                          className="w-20 h-20"
                          src={conditionImage[selectedWeather.conditions].image}
                        />
                      </div>
                      <div className="flex flex-col gap-2 text-white/25 text-lg font-medium ">
                        <div className="flex items-center gap-3">
                          Hours:
                          <div className="w-10">
                            <Clock />
                          </div>
                        </div>
                        <div>
                          Date Time:{" "}
                          <span className="text-white/40 ">
                            {day} of {month}
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalCustom;
