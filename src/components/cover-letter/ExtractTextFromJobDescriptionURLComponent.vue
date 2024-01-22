<template>
  <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
    <!-- header section -->
    <PageHeadersComponent
      title="Cover letter"
      description="Get help with a cover letter tailored to the job description and your resume."
    />
    <!-- end of header section -->
    <!-- main section -->
    <div class="max-w-2xl py-10 lg:py-10">
      <!-- Card -->
      <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
        <div class="text-left mb-8">
          <h2
            class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200"
          >
            Job posting URL
          </h2>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Enter the link to the job posting below...
          </p>
        </div>

        <form>
          <!-- Section -->
          <div
            class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent"
          >
            <div class="mt-1 space-y-3">
              <input
                v-model="jobPostingURL"
                type="text"
                class="py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="e.g. https://www.linkedin.com/jobs/view/..."
              />
            </div>
          </div>
          <!-- End Section -->
        </form>

        <div class="mt-5 flex justify-end gap-x-2">
          <Button @click="extractTextFromURL" type="primary"
            >Generate Cover</Button
          >
        </div>
      </div>
      <!-- End Card -->
    </div>
    <!-- end of main section -->
  </div>
</template>

<script>
import PageHeadersComponent from "@/components/PageHeadersComponent";
import Button from "@/components/utilities/Button";
import { convert } from "html-to-text";
// There is also an alias to `convert` called `htmlToText`.
import axios from "axios";

export default {
  name: "ExtractTextFromJobDescriptionURLComponent",
  components: {
    PageHeadersComponent,
    Button,
  },
  data() {
    return {
      jobPostingURL:
        "https://www.seek.com.au/job/73209293?ref=recom-homepage&token=1~a0f6b1e2-852c-41cf-ac8d-1993cc43070a",
    };
  },
  methods: {
    async extractTextFromURL() {
      console.log("extractTextFromURL from ", this.jobPostingURL);

      //get html from url
      const plainTextFromSite =
        await this.getWebPageHtmlAndConvertToPlainText();
      console.log(plainTextFromSite);
    },
    // function to get html from url
    async getWebPageHtmlAndConvertToPlainText() {
      try {
        const response = await axios.post("http://localhost:3000/fetch-html", {
          url: this.jobPostingURL,
        });
        let htmlContent = response.data;
        // console.log("HTML:", htmlContent);

        // using html-to-text to convert html to plain text
        const options = {
          wordwrap: 130,
          // ...
        };
        const convertedString = convert(htmlContent, options);
        console.log(convertedString); // Hello World

        return convertedString;
        // You can further process or parse the HTML as needed
      } catch (error) {
        console.error("Failed to fetch HTML:", error);
        // Handle error in your Vue.js component
      }
    },
  },
};
</script>

<style></style>
