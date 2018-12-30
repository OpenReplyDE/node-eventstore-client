/**
 * preferences for connecting to cluster nodes
 * 
 * @enum {"Master"|"Slave"|"Random"} NodePreference
 * @readonly
 */
const NodePreference = Object.freeze({
    Master: 'Master', // when attempting connection, prefers master node
    Slave: 'Slave', // when attempting connection, prefers slave node.
    Random: 'Random' // when attempting connection, has no node preference.
});

module.exports = NodePreference;
