import React from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const FAQ = () => {
  const faqs = [
    {
      question: "What is an NFT?",
      answer:
        "An NFT (Non-Fungible Token) is a unique digital asset that represents ownership or proof of authenticity of a specific item or piece of content, often associated with digital art, collectibles, or virtual goods, and is stored on a blockchain.",
    },
    {
      question: "How do I buy an NFT?",
      answer:
        "To buy an NFT, you'll need a digital wallet and cryptocurrency. Browse NFT marketplaces, connect your wallet, and make a purchase.",
    },
    {
      question: "How do I sell an NFT?",
      answer:
        "To sell an NFT, list it on an NFT marketplace, set your price, and wait for a buyer to complete the transaction.",
    },
    {
      question: "What cryptocurrencies do you accept?",
      answer:
        "Most NFT platforms accept Ethereum (ETH), but some also accept other cryptocurrencies like Solana (SOL) or Polygon (MATIC).",
    },
  ];

  return (
    <div className="flex items-center justify-center p-6 min-h-screen">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-black text-center leading-[76.8px] tracking-[0.03em] mb-6">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        
        <Accordion allowZeroExpanded>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} className="mb-4 border border-gray-300 rounded-lg shadow-md">
              
              {/* Accordion Header */}
              <AccordionItemHeading>
                <AccordionItemButton className="w-full text-left flex justify-between items-center p-4 bg-white hover:bg-gray-200 font-semibold cursor-pointer transition-all duration-300 text-black rounded-lg">
                  {faq.question}
                  <span className="text-xl">+</span>
                </AccordionItemButton>
              </AccordionItemHeading>

              {/* Accordion Content */}
              <AccordionItemPanel>
                <div className="p-4 bg-gray-900 rounded-b-lg transition-all duration-300">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </AccordionItemPanel>

            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
