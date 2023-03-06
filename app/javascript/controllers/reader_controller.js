import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="reader"
export default class extends Controller {
  static targets = ["readingTime", "body"];

  connect() {
    this.readingTime();
  }

  readingTime() {
    const text = this.bodyTarget.textContent;
    const wordsPerMinute = 265;
    const numberOfWords = text.split(/\s/g).length;
    const minutes = numberOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    this.readingTimeTarget.textContent = `${readTime} min read`;
  }
}
