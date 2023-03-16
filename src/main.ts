
export const form = document.querySelector<HTMLFormElement>("form")!;

const copyToClipboard = (str: string): void => {
    // Check if the browser has access to the navigator object and its properties
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(str);
    } else {
        // ExecCommand is deprecated but it is a fallback that works for old devices
        document.execCommand("copy");
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputText = document.querySelector<HTMLTextAreaElement>("textarea")!;



    if (inputText.value) {

        const inputTextValue = inputText.value;

        // Regex to locate a words or anything that starts with @ and end with :
        const regex = /@[^:]*:/g;
        const reqOutputText = inputTextValue.replace(regex, "");
        inputText.value = reqOutputText;
        // Select the text in the textarea
        inputText.select();
        //For mobile devices from start till the end
        inputText.setSelectionRange(0, 99999);
        copyToClipboard(inputText.value);
        // After completion set the text value to done
        inputText.value = "Done";
    }



});