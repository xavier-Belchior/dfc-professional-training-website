import React, { useState } from "react";
import { Container } from "../layout/container";
import { BlogContent } from "../blog/BlogContent";
import { BlogFilter } from "../blog/BlogFilter";

export const Blog = () => {
  return (
    <section className="px-6 lg:px-16 scroll-mt-24   py-20 bg-white">
      <Container>
        <BlogContent />
      </Container>
    </section>
  );
};
