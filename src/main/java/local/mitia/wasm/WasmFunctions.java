package local.mitia.wasm;

import org.teavm.interop.Export;

/**
 * Created by Dmitry Alexandrov on 25.01.19.
 */
public class WasmFunctions {

    @Export(name = "thePurposeOfLife")
    public static int getThePurposeOfLife(){
        return 42;
    }

    public static void main(String[] args) {

    }
}
