'use strict';

const QueryStringQueryBase = require('./query-string-query-base');

const ES_REF_URL =
    'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html';

/**
 * A query that uses the `SimpleQueryParser` to parse its context.
 * Unlike the regular `query_string` query, the `simple_query_string` query
 * will never throw an exception, and discards invalid parts of the query.
 *
 * [Elasticsearch reference](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html)
 *
 * @extends QueryStringQueryBase
 */
class SimpleQueryStringQuery extends QueryStringQueryBase {

    /**
     * Creates an instance of `SimpleQueryStringQuery`
     *
     * @param {string=} queryString The query string
     */
    constructor(queryString) {
        super('simple_query_string', ES_REF_URL, queryString);
    }

    /**
     * `simple_query_string` support multiple flags to specify which parsing features
     * should be enabled. It is specified as a `|`-delimited string.
     *
     * @param {string} flags `|` delimited string. The available flags are: `ALL`, `NONE`,
     * `AND`, `OR`, `NOT`, `PREFIX`, `PHRASE`, `PRECEDENCE`, `ESCAPE`, `WHITESPACE`,
     * `FUZZY`, `NEAR`, and `SLOP`.
     * @returns {SimpleQueryStringQuery} returns `this` so that calls can be chained.
     */
    flags(flags) {
        this._queryOpts.flags = flags;
        return this;
    }
}

module.exports = SimpleQueryStringQuery;
