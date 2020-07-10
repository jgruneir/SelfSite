declare module 'vue-aos' {
    import {PluginObject} from 'vue';

    interface VueAos extends PluginObject<any> {
        VueAos: VueAos;
    }

    const VueAos: VueAos;
    export default VueAos;
}