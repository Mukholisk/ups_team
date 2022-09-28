import {defineStore} from "pinia";


export const useTestPiniaStore = defineStore('testPiniaStore', {
    state: (): {
        test: string
    } => ({
        test: "testInit"
    }),
    actions: {
        testTochange() {
            this.test = "change"
        }
    },
    getters: {
        getTest(state): string {
            return state.test
        }
    }
})
