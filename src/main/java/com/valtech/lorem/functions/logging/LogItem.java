package com.valtech.lorem.functions.logging;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

@Data
@AllArgsConstructor
public class LogItem {
    private String user;
    private Type type;
    private String operation;
    private String inputArgument;
    private String PartitionKey;
    private String RowKey;

    public enum Type {
        TEXT, OPERATION, FALLBACK
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this, ToStringStyle.SHORT_PREFIX_STYLE);
    }
}
