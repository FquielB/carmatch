import * as XLSX from "xlsx";

export const readExcel = () => {
  return new Promise((resolve, reject) => {
    fetch("cars.xlsx")
      .then((res) => {
        const reader = res.body.getReader();
        return new ReadableStream({
          start(controller) {
            return pump();
            function pump() {
              return reader.read().then(({ done, value }) => {
                // When no more data needs to be consumed, close the stream
                if (done) {
                  controller.close();
                  return;
                }
                // Enqueue the next data chunk into our target stream
                controller.enqueue(value);
                return pump();
              });
            }
          },
        });
      })
      .then((stream) => new Response(stream))
      .then((response) => response.blob())
      .then((blobFile) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(blobFile);

        fileReader.onload = (e) => {
          const arrayBuffer = e.target.result;

          const wb = XLSX.read(arrayBuffer, { type: "buffer" });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws);
          resolve(data);
        };
      });
  });
};
