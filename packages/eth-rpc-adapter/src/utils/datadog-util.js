"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignTracerSpan = exports.buildTracerSpan = void 0;
const dd_trace_1 = require("dd-trace");
const perf_hooks_1 = require("perf_hooks");
/**
 * Get the current active span with tags or undefined if [none|disabled].
 * @returns {DataDogTracerSpan} The active spanTags with span.
 */
const buildTracerSpan = () => {
    // Get datadog span from the context
    const span = process.env.EXTENSIVE_DD_INSTRUMENTATION === 'true' ? dd_trace_1.default.scope().active() : null;
    // Initialize datadog span tags
    const spanTags = span
        ? {
            body: {},
            enterTime: perf_hooks_1.performance.now(),
            exitTime: -1,
            elapsedTime: -1,
            spanRef: span
        }
        : undefined;
    return spanTags;
};
exports.buildTracerSpan = buildTracerSpan;
/**
 * Updates exitTime and elapsedTime of the spanTags
 * and assigns the keyValueMap spanTags to the datadog span.
 */
const assignTracerSpan = (spanTags, keyValueMap, flattenKeyValues = true) => {
    if (spanTags && spanTags.spanRef) {
        const span = spanTags.spanRef;
        spanTags.spanRef = undefined;
        spanTags.body = keyValueMap || {};
        if (flattenKeyValues) {
            Object.assign(spanTags, keyValueMap || {});
        }
        // Update datadog span tags
        spanTags.exitTime = perf_hooks_1.performance.now();
        spanTags.elapsedTime = spanTags.exitTime - spanTags.enterTime;
        // Assign datadog tags to span
        span.addTags(spanTags);
    }
};
exports.assignTracerSpan = assignTracerSpan;
