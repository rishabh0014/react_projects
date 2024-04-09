import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "1",
      label: "bngfdk",
      content: "hg f e gf dsff dsdffde eg ffhjhg fdey5hegf t5tge ggt5ytfe",
    },
    {
      id: "2",
      label: "hgv",
      content: "ijhgfdcvbnm gf dnheygdb c behyhedb ",
    },
    {
      id: "3",
      label: "gfd",
      content: "lkjhggb hgff ghjhgfds x swsdf ghjm kjhgfd dc vbn",
    },
    {
      id: "4",
      label: "oik",
      content: "iuhbnjuhgbnj hgfdx cfded rtgfre rfghjj ytr ee rfg hg fre efgh ",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
